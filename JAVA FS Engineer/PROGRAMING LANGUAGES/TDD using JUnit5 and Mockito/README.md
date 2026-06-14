# TDD using JUnit5 and Mockito

## 📌 Purpose

This folder contains **Test-Driven Development (TDD)** practice exercises for a simple `BankAccount` domain and a generic service/external-API scenario. It covers writing unit tests with **JUnit 4/5**, using assertions, test fixtures (setup/teardown), and mocking external dependencies with **Mockito**.

## 📂 Contents

| Folder | Description |
|--------|-------------|
| [`JUnit_Basic Testing Exercises/`](<JUnit_Basic Testing Exercises/README.md>) | Foundational JUnit exercises: setting up JUnit, writing assertions, and applying the Arrange-Act-Assert pattern with fixtures |
| [`Mockito exercises/`](<Mockito exercises/README.md>) | Mocking and stubbing external dependencies, and verifying interactions with Mockito |

## 📦 Dependencies

Each sub-folder has its own `pom.xml`, but in summary:

- **JUnit_Basic Testing Exercises** uses **JUnit 4** (`junit:junit:4.13.2`)
- **Mockito exercises** uses **JUnit 5 (Jupiter)** + **Mockito** (`junit-jupiter:5.10.0`, `mockito-core:5.5.0`, `mockito-junit-jupiter:5.5.0`)
- All sub-projects target **Java 8** via `maven-compiler-plugin:3.8.1`

## ▶️ Usage

Each sub-folder is an independent Maven project. From inside any leaf folder:

```bash
mvn clean test
```

This compiles the source and test classes and runs the JUnit test suite, printing pass/fail results to the console.

## 🔗 Related Folders

- [JUnit_Basic Testing Exercises](<JUnit_Basic Testing Exercises/README.md>)
- [Mockito exercises](<Mockito exercises/README.md>)
- [SLF4J logging framework](<../SLF4J logging framework/README.md>)
- [PL:SQL programming](<../PL:SQL programming/README.md>)
- [PROGRAMING LANGUAGES](../README.md)
- [Repository root](../../../README.md)
