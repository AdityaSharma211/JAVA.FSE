package com.bank;

import org.junit.Test;
import static org.junit.Assert.*;

public class BankAccountTest {

    @Test
    public void testInitialBalance() {
        BankAccount account = new BankAccount("Alice", 1000.0);
        assertEquals(1000.0, account.getBalance(), 0.001);
    }

    @Test
    public void testOwnerName() {
        BankAccount account = new BankAccount("Alice", 1000.0);
        assertEquals("Alice", account.getOwner());
    }
}