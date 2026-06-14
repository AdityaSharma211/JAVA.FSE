# Setting Up JUnit

## 📌 Purpose

The first exercise in the JUnit progression: a minimal Maven project that introduces a `BankAccount` domain class and a basic JUnit 4 test class to verify object construction.

## 📂 Files

| File | Description |
|------|-------------|
| `BankAccount.java` | Domain class (`com.bank.BankAccount`) with `deposit`, `withdraw`, `getBalance`, and `getOwner` methods, including basic input validation. |
| `BankAccountTest.java` | JUnit 4 test class with two tests verifying the initial balance and owner name set via the constructor. |
| `pom.xml` | Maven project descriptor (`artifactId: JUnitExercises`) declaring the JUnit 4 dependency. |

## 🔍 File Details

### `BankAccount.java`
- Constructor `BankAccount(String owner, double initialBalance)`.
- `deposit(double amount)` — throws `IllegalArgumentException("Deposit must be positive.")` if `amount <= 0`.
- `withdraw(double amount)` — throws `IllegalArgumentException` if `amount <= 0` ("Withdrawal must be positive.") or `amount > balance` ("Insufficient balance.").
- `getBalance()` / `getOwner()` — simple getters.

### `BankAccountTest.java`
- `testInitialBalance()` — asserts a new account's balance equals the constructor's `initialBalance` (1000.0).
- `testOwnerName()` — asserts `getOwner()` returns `"Alice"`.

## 📦 Dependencies

- `junit:junit:4.13.2` (test scope)
- Java 8 via `maven-compiler-plugin:3.8.1`

## ▶️ Usage

```bash
cd "JAVA FS Engineer/PROGRAMING LANGUAGES/TDD using JUnit5 and Mockito/JUnit_Basic Testing Exercises/Setting Up JUnit"
mvn clean test
```

Expected result: **2 tests run, 0 failures**.

## 🔗 Related Folders

- [Assertions in JUnit](<../Assertions in JUnit/README.md>) — next step, expands on assertion styles
- [Arrange-Act-Assert (AAA) Pattern...](<../Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup andTeardown Methods in JUnit/README.md>)
- [JUnit_Basic Testing Exercises](../README.md)
- [Repository root](../../../../../README.md)
