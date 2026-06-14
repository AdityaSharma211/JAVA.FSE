package com.bank;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logger.trace("This is a trace message");
        logger.debug("This is a debug message");
        logger.info("This is an info message");
        logger.warn("This is a warning message");
        logger.error("This is an error message");

        logger.info("Application started successfully.");

        String user = "Alice";
        double balance = 1000.0;
        logger.info("User {} logged in with balance ${}", user, balance);

        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            logger.error("Arithmetic error occurred: {}", e.getMessage());
        }

        if (balance < 500) {
            logger.warn("Low balance warning for user {}: ${}", user, balance);
        } else {
            logger.info("Balance is sufficient for user {}", user);
        }

        logger.error("Critical error: Unable to connect to the database.");
        logger.warn("Warning: Transaction limit is about to be reached.");
        logger.debug("Debug: Checking account details for user {}", user);
    }
}
