package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Step 1 of the exercise: just wire up the endpoint and confirm it's
 * reachable and NOT blocked by Spring Security (see SecurityConfig,
 * which permitAll's this path). Credential reading and token generation
 * are added in the next two exercises.
 */
@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public String authenticate() {
        LOGGER.debug("Start authenticate() method.");
        String response = "Authenticate endpoint reachable. "
                + "Credential reading & token generation added in next exercises.";
        LOGGER.debug("End authenticate() method.");
        return response;
    }
}
