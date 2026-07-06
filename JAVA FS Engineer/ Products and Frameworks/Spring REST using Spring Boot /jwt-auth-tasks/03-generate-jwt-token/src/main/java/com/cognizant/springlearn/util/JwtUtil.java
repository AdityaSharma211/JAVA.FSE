package com.cognizant.springlearn.util;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * Step 3 of the exercise: generate a signed JWT for the user that was
 * authenticated in AuthenticationController.
 *
 * The token has three standard JWT claims:
 *  - sub (subject)     : the username
 *  - iat (issued at)    : the time the token was created
 *  - exp (expiration)   : iat + validity period
 * signed with HS256 using a symmetric secret key.
 */
@Component
public class JwtUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(JwtUtil.class);

    // In a real application, externalize this secret (e.g. application.properties /
    // environment variable / secrets manager) and use a much longer, random value.
    private static final String SECRET_KEY = "ReplaceThisWithALongRandomSecretKeyForProductionUse";

    // Token validity: 20 minutes
    private static final long VALIDITY_MS = 1000L * 60 * 20;

    public String generateToken(String username) {
        LOGGER.debug("Start generateToken() method. username={}", username);

        Date issuedAt = new Date();
        Date expiration = new Date(issuedAt.getTime() + VALIDITY_MS);

        String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(issuedAt)
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();

        LOGGER.debug("End generateToken() method.");
        return token;
    }
}
