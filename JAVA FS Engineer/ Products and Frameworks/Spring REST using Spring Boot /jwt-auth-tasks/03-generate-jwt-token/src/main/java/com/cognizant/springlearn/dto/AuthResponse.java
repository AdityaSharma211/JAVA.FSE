package com.cognizant.springlearn.dto;

/**
 * Simple response wrapper so Jackson serializes the token exactly as:
 * {"token":"eyJhbGciOiJIUzI1NiJ9...."}
 */
public class AuthResponse {

    private String token;

    public AuthResponse() {
    }

    public AuthResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
