# SLF4J Logging Framework

## 📌 Purpose

Demonstrates application logging in Java using **SLF4J** (Simple Logging Facade for Java) with **Logback** as the logging implementation. Covers all standard logging levels — `trace`, `debug`, `info`, `warn`, `error` — plus parameterized log messages and logging inside exception handling.

## 📂 Files

| File | Description |
|------|-------------|
| `LoggingExample.java` | Main class (`com.bank.LoggingExample`) demonstrating every SLF4J logging level, parameterized messages, and error logging from a `try/catch` block. |
| `pom.xml` | Maven project descriptor declaring the `slf4j-api` and `logback-classic` dependencies. |
| `src/main/java/com/src/main/resources/logback.xml` | Logback configuration defining a console appender and log pattern. |

## 🔍 File Details

### `LoggingExample.java`
- Package: `com.bank`
- Creates a `Logger` via `LoggerFactory.getLogger(LoggingExample.class)`.
- Logs a message at every level: `trace`, `debug`, `info`, `warn`, `error`.
- Demonstrates **parameterized logging**, e.g. `logger.info("User {} logged in with balance ${}", user, balance)`.
- Catches an `ArithmeticException` (division by zero) and logs it with `logger.error(...)`.
- Uses a conditional (`balance < 500`) to demonstrate context-aware `warn` vs `info` logging.

### `pom.xml`
Declares:
- `org.slf4j:slf4j-api:1.7.30`
- `ch.qos.logback:logback-classic:1.2.3`
- Maven Compiler Plugin targeting Java 8

### `logback.xml`
Configures a `ConsoleAppender` with pattern `%d{HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n` and sets the root logger level to `DEBUG` (so `trace` messages are suppressed by default, while `debug`, `info`, `warn`, and `error` all print).

## ⚠️ Known Issue / Suggested Fix

The current file layout does not follow the standard **Maven directory convention**, which may prevent Maven from finding the class and config files correctly:

- `LoggingExample.java` declares `package com.bank;` but sits at the project root instead of `src/main/java/com/bank/LoggingExample.java`.
- `logback.xml` is nested at `src/main/java/com/src/main/resources/logback.xml` instead of the conventional `src/main/resources/logback.xml`.

**Recommended structure:**
```
SLF4J logging framework/
├── pom.xml
└── src/
    └── main/
        ├── java/
        │   └── com/
        │       └── bank/
        │           └── LoggingExample.java
        └── resources/
            └── logback.xml
```

## 📦 Dependencies

- `org.slf4j:slf4j-api:1.7.30`
- `ch.qos.logback:logback-classic:1.2.3`
- Java 8 (via `maven-compiler-plugin:3.8.1`)

## ▶️ Usage

After fixing the folder layout as described above:

```bash
cd "JAVA FS Engineer/PROGRAMING LANGUAGES/SLF4J logging framework"
mvn clean package
mvn exec:java -Dexec.mainClass="com.bank.LoggingExample"
```

Expected console output includes lines like:
```
12:34:56 [main] DEBUG com.bank.LoggingExample - This is a debug message
12:34:56 [main] INFO  com.bank.LoggingExample - This is an info message
12:34:56 [main] WARN  com.bank.LoggingExample - This is a warning message
12:34:56 [main] ERROR com.bank.LoggingExample - This is an error message
12:34:56 [main] INFO  com.bank.LoggingExample - Application started successfully.
12:34:56 [main] INFO  com.bank.LoggingExample - User Alice logged in with balance $1000.0
12:34:56 [main] ERROR com.bank.LoggingExample - Arithmetic error occurred: / by zero
12:34:56 [main] INFO  com.bank.LoggingExample - Balance is sufficient for user Alice
12:34:56 [main] ERROR com.bank.LoggingExample - Critical error: Unable to connect to the database.
12:34:56 [main] WARN  com.bank.LoggingExample - Warning: Transaction limit is about to be reached.
12:34:56 [main] DEBUG com.bank.LoggingExample - Debug: Checking account details for user Alice
```

## 🔗 Related Folders

- [PL:SQL programming](<../PL:SQL programming/README.md>)
- [TDD using JUnit5 and Mockito](<../TDD using JUnit5 and Mockito/README.md>)
- [PROGRAMING LANGUAGES](../README.md)
- [Repository root](../../../README.md)
