# Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup and Teardown Methods in JUnit

## 📌 Purpose

The third and most advanced exercise in the JUnit progression: demonstrates **test fixtures** using `@Before`/`@After`, and structures every test according to the **Arrange-Act-Assert (AAA)** pattern. Also covers testing **exception-throwing behavior** with `try/catch` + `fail()`.

## 📂 Files

| File | Description |
|------|-------------|
| `BankAccountAAATest.java` | JUnit 4 test class with `@Before`/`@After` fixtures and seven AAA-structured test methods. |
| `BankAccount.java` | Domain class (`com.bank.BankAccount`) — identical to the one in [`Setting Up JUnit`](<../Setting Up JUnit/README.md>). |
| `pom.xml` | Maven project descriptor (`artifactId: JUnitExercises`) declaring the JUnit 4 dependency. |

## 🔍 File Details

### `BankAccountAAATest.java`
- **`@Before setUp()`** — creates a fresh `BankAccount("Alice", 1000.0)` before every test and prints a setup message.
- **`@After tearDown()`** — sets the account reference to `null` after every test and prints a teardown message.
- **`testDeposit()`** — Arrange: deposit amount 500; Act: `account.deposit(500)`; Assert: balance is 1500.
- **`testWithdraw()`** — withdraws 200; asserts balance is 800.
- **`testDepositInvalidAmount()`** — asserts that depositing -100 throws `IllegalArgumentException("Deposit must be positive.")`, using `try/catch` + `fail()` if no exception is thrown.
- **`testWithdrawInsufficientBalance()`** — asserts that withdrawing 5000 (more than the balance) throws `IllegalArgumentException("Insufficient balance.")`.
- **`testMultipleTransactions()`** — deposits 500 then withdraws 200; asserts the final balance is 1300.
- **`testOwnerUnchanged()`** — deposits and withdraws, then asserts the owner name (`"Alice"`) is unchanged.
- **`testBalanceAfterZeroImpact()`** — deposits and withdraws the same amount (300), asserting the balance returns to its original value.

### `BankAccount.java`
Same implementation as in [`Setting Up JUnit/BankAccount.java`](<../Setting Up JUnit/README.md>).

## 📦 Dependencies

- `junit:junit:4.13.2` (test scope)
- Java 8 via `maven-compiler-plugin:3.8.1`

## ▶️ Usage

```bash
cd "JAVA FS Engineer/PROGRAMING LANGUAGES/TDD using JUnit5 and Mockito/JUnit_Basic Testing Exercises/Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup andTeardown Methods in JUnit"
mvn clean test
```

Expected result: **7 tests run, 0 failures**. The console will also show interleaved `Setup:` and `Teardown:` messages before/after each test method.

## 🔗 Related Folders

- [Assertions in JUnit](<../Assertions in JUnit/README.md>) — previous step, basic assertion styles
- [Setting Up JUnit](<../Setting Up JUnit/README.md>) — first step, project setup
- [JUnit_Basic Testing Exercises](../README.md)
- [Repository root](../../../../../README.md)
