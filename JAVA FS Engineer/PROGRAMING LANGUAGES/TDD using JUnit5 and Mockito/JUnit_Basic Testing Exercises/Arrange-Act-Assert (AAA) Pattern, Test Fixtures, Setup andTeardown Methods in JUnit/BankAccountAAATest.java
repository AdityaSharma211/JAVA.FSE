package com.bank;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class BankAccountAAATest {

    private BankAccount account;

    @Before
    public void setUp() {
        account = new BankAccount("Alice", 1000.0);
        System.out.println("Setup: BankAccount created with balance $1000");
    }

    @After
    public void tearDown() {
        account = null;
        System.out.println("Teardown: BankAccount set to null");
    }

    @Test
    public void testDeposit() {
        double depositAmount = 500.0;
        account.deposit(depositAmount);
        assertEquals(1500.0, account.getBalance(), 0.001);
    }

    @Test
    public void testWithdraw() {
        double withdrawAmount = 200.0;
        account.withdraw(withdrawAmount);
        assertEquals(800.0, account.getBalance(), 0.001);
    }

    @Test
    public void testDepositInvalidAmount() {
        try {
            account.deposit(-100.0);
            fail("Expected IllegalArgumentException was not thrown.");
        } catch (IllegalArgumentException e) {
            assertEquals("Deposit must be positive.", e.getMessage());
        }
    }

    @Test
    public void testWithdrawInsufficientBalance() {
        try {
            account.withdraw(5000.0);
            fail("Expected IllegalArgumentException was not thrown.");
        } catch (IllegalArgumentException e) {
            assertEquals("Insufficient balance.", e.getMessage());
        }
    }

    @Test
    public void testMultipleTransactions() {
        account.deposit(500.0);
        account.withdraw(200.0);
        assertEquals(1300.0, account.getBalance(), 0.001);
    }

    @Test
    public void testOwnerUnchanged() {
        account.deposit(100.0);
        account.withdraw(50.0);
        assertEquals("Alice", account.getOwner());
    }

    @Test
    public void testBalanceAfterZeroImpact() {
        double before = account.getBalance();
        account.deposit(300.0);
        account.withdraw(300.0);
        assertEquals(before, account.getBalance(), 0.001);
    }
}