package com.cognizant.springlearn.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.dto.AuthResponse;
import com.cognizant.springlearn.util.JwtUtil;

/**
 * Step 3 of the exercise (final): after successfully authenticating the
 * user from the decoded Authorization header (step 2), generate a signed
 * JWT via JwtUtil and return it as {"token": "..."}.
 *
 * Try it:
 *   curl -s -u user:pwd http://localhost:8090/authenticate
 */
@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);
    private static final String BASIC_PREFIX = "Basic ";

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestHeader("Authorization") String authorizationHeader) {
        LOGGER.debug("Start authenticate() method.");

        try {
            String[] credentials = decodeCredentials(authorizationHeader);
            String username = credentials[0];
            String password = credentials[1];

            // Validates username/password against the UserDetailsService
            // configured in SecurityConfig. Throws BadCredentialsException
            // if they don't match.
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            String token = jwtUtil.generateToken(username);

            LOGGER.debug("End authenticate() method. Token generated for user={}", username);
            return ResponseEntity.ok(new AuthResponse(token));

        } catch (BadCredentialsException | AuthenticationException ex) {
            LOGGER.debug("Authentication failed: {}", ex.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    /**
     * Decodes a "Basic base64(username:password)" Authorization header
     * into a 2-element array: [username, password].
     */
    private String[] decodeCredentials(String authorizationHeader) {
        LOGGER.debug("Start decodeCredentials() method.");

        if (authorizationHeader == null || !authorizationHeader.startsWith(BASIC_PREFIX)) {
            throw new BadCredentialsException("Missing or malformed Authorization header");
        }

        String base64Credentials = authorizationHeader.substring(BASIC_PREFIX.length());
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String decoded = new String(decodedBytes, StandardCharsets.UTF_8);

        // decoded is in the form "username:password"
        String[] parts = decoded.split(":", 2);
        if (parts.length != 2) {
            throw new BadCredentialsException("Malformed credentials in Authorization header");
        }

        LOGGER.debug("End decodeCredentials() method.");
        return parts;
    }
}
