# JUnit Basic Testing Exercises

## 📌 Purpose

A progression of three exercises that build up core **JUnit 4** testing skills using a shared `BankAccount` domain class: setting up a test project, writing assertions, and applying the **Arrange-Act-Assert (AAA)** pattern with test fixtures (`@Before`/`@After`).

## 📂 Contents

| Folder | Description |
|--------|-------------|
| [`Setting Up JUnit/`](<Setting Up JUnit/README.md>) | Minimal JUnit setup: a `BankAccount` class and a first test class with basic `assertEquals` checks |
| [`Assertions in JUnit/`](<Assertions in JUnit/README.md>) | Demonstrates the full range of JUnit assertion methods (`assertEquals`, `assertTrue`, `assertFalse`, `assertNull`, `assertNotNull`) |
| [`Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup andTeardown Methods in JUnit/`](<Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup andTeardown Methods in JUnit/README.md>) | Uses `@Before`/`@After` fixtures and structures tests using the Arrange-Act-Assert pattern, including exception-path tests |

## 🔍 The `BankAccount` Domain Class

All three exercises use the same `com.bank.BankAccount` class:

```java
public class BankAccount {
    private String owner;
    private double balance;

    public BankAccount(String owner, double initialBalance) { ... }
    public void deposit(double amount)   // throws IllegalArgumentException if amount <= 0
    public void withdraw(double amount)  // throws IllegalArgumentException if amount <= 0 or amount > balance
    public double getBalance() { return balance; }
    public String getOwner()   { return owner; }
}
```

## 📦 Dependencies

- `junit:junit:4.13.2` (test scope)
- Java 8 via `maven-compiler-plugin:3.8.1`

(Each sub-folder has its own copy of `pom.xml` with these same dependencies, since each is treated as an independent Maven project.)

## ▶️ Usage

```bash
cd "Setting Up JUnit"        # or "Assertions in JUnit", or the AAA folder
mvn clean test
```

## 🔗 Related Folders

- [Setting Up JUnit](<Setting Up JUnit/README.md>)
- [Assertions in JUnit](<Assertions in JUnit/README.md>)
- [Arrange-Act-Assert (AAA) Pattern...](<Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup andTeardown Methods in JUnit/README.md>)
- [Mockito exercises](<../Mockito exercises/README.md>)
- [TDD using JUnit5 and Mockito](../README.md)
- [Repository root](../../../../README.md)
