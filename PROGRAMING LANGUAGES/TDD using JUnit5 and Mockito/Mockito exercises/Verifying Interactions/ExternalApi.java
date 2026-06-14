package com.bank;

public interface ExternalApi {
    String getData();
    String getDataById(int id);
    boolean postData(String data);
}