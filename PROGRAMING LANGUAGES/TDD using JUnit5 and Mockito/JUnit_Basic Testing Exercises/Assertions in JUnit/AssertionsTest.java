package com.bank;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testBasicAssertions() {
        assertEquals(5, 2 + 3);
        assertTrue(5 > 3);
        assertFalse(5 < 3);
        assertNull(null);
        assertNotNull(new Object());
    }

    @Test
    public void testBankAccountAssertions() {
        BankAccount account = new BankAccount("Bob", 500.0);
        assertEquals("Bob", account.getOwner());
        assertEquals(500.0, account.getBalance(), 0.001);
        assertTrue(account.getBalance() > 0);
        assertNotNull(account);
        assertFalse(account.getBalance() < 0);
    }

    @Test
    public void testDepositAssertion() {
        BankAccount account = new BankAccount("Carol", 200.0);
        account.deposit(300.0);
        assertEquals(500.0, account.getBalance(), 0.001);
        assertTrue(account.getBalance() > 200.0);
        assertNotNull(account.getOwner());
    }

    @Test
    public void testWithdrawAssertion() {
        BankAccount account = new BankAccount("David", 800.0);
        account.withdraw(300.0);
        assertEquals(500.0, account.getBalance(), 0.001);
        assertFalse(account.getBalance() < 0);
        assertTrue(account.getBalance() > 0);
    }
}