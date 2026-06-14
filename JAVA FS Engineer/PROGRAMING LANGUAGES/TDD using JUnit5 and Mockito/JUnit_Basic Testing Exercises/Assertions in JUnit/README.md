# Assertions in JUnit

## 📌 Purpose

The second exercise in the JUnit progression: demonstrates the full range of **JUnit 4 assertion methods** (`assertEquals`, `assertTrue`, `assertFalse`, `assertNull`, `assertNotNull`) applied both to plain values and to the `BankAccount` domain object.

## 📂 Files

| File | Description |
|------|-------------|
| `AssertionsTest.java` | JUnit 4 test class showcasing different assertion styles across four test methods. |
| `BankAccount.java` | Domain class (`com.bank.BankAccount`) — identical to the one in [`Setting Up JUnit`](<../Setting Up JUnit/README.md>), with `deposit`, `withdraw`, `getBalance`, and `getOwner`. |
| `pom.xml` | Maven project descriptor (`artifactId: JUnitExercises`) declaring the JUnit 4 dependency. |

## 🔍 File Details

### `AssertionsTest.java`
- **`testBasicAssertions()`** — basic value assertions: `assertEquals(5, 2+3)`, `assertTrue(5 > 3)`, `assertFalse(5 < 3)`, `assertNull(null)`, `assertNotNull(new Object())`.
- **`testBankAccountAssertions()`** — verifies a new `BankAccount("Bob", 500.0)` has the correct owner, balance, is non-null, and has a positive balance.
- **`testDepositAssertion()`** — deposits 300 into a 200-balance account and asserts the new balance is 500 and greater than 200.
- **`testWithdrawAssertion()`** — withdraws 300 from an 800-balance account and asserts the new balance is 500 and non-negative.

### `BankAccount.java`
Same implementation as in [`Setting Up JUnit/BankAccount.java`](<../Setting Up JUnit/README.md>) — constructor takes `owner` and `initialBalance`; `deposit`/`withdraw` validate input and throw `IllegalArgumentException` on invalid amounts.

## 📦 Dependencies

- `junit:junit:4.13.2` (test scope)
- Java 8 via `maven-compiler-plugin:3.8.1`

## ▶️ Usage

```bash
cd "JAVA FS Engineer/PROGRAMING LANGUAGES/TDD using JUnit5 and Mockito/JUnit_Basic Testing Exercises/Assertions in JUnit"
mvn clean test
```

Expected result: **4 tests run, 0 failures**.

## 🔗 Related Folders

- [Setting Up JUnit](<../Setting Up JUnit/README.md>) — previous step, introduces `BankAccount` and basic tests
- [Arrange-Act-Assert (AAA) Pattern...](<../Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup andTeardown Methods in JUnit/README.md>) — next step, adds fixtures and AAA structure
- [JUnit_Basic Testing Exercises](../README.md)
- [Repository root](../../../../../README.md)
