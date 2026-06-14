# Verifying Interactions

## 📌 Purpose

Builds on the [Mocking and Stubbing](<../Mocking and Stubbing/README.md>) exercise to demonstrate **verifying interactions** with a Mockito mock — confirming not just *what* a method returns, but *whether*, *how many times*, and *with what arguments* it was called.

## 📂 Files

| File | Description |
|------|-------------|
| `ExternalApi.java` | Interface with `getData()`, `getDataById(int id)`, and `postData(String data)` — same as in [Mocking and Stubbing](<../Mocking and Stubbing/README.md>). |
| `MyService.java` | Service class that delegates to `ExternalApi` — identical to the one in [Mocking and Stubbing](<../Mocking and Stubbing/README.md>). |
| `MyServiceTest.java` | JUnit 5 + Mockito test class with three interaction-verification tests. |
| `pom.xml` | Maven project descriptor (`artifactId: MockitoExercises`) declaring JUnit 5 and Mockito dependencies. |

## 🔍 File Details

### `MyServiceTest.java`
- **`testVerifyInteraction()`** — stubs `getData()`, calls `service.fetchData()`, then verifies:
  - `verify(mockApi).getData()` — the method was called.
  - `verify(mockApi, times(1)).getData()` — called exactly once.
  - `verify(mockApi, never()).getDataById(anyInt())` — `getDataById` was never called.
- **`testVerifyInteractionWithArguments()`** — stubs `getDataById(42)`, calls `service.fetchDataById(42)`, then verifies `getDataById(42)` was called and `getDataById(99)` was **never** called.
- **`testVerifyPostData()`** — stubs `postData("Hello")` to return `true`, calls `service.sendData("Hello")`, then verifies `postData("Hello")` was called exactly once via `verify(mockApi, times(1)).postData("Hello")`.

## 📦 Dependencies

- `org.junit.jupiter:junit-jupiter:5.10.0` (test scope)
- `org.mockito:mockito-core:5.5.0` (test scope)
- `org.mockito:mockito-junit-jupiter:5.5.0` (test scope)
- `org.apache.maven.plugins:maven-surefire-plugin:3.1.2`
- Java 8 via `maven-compiler-plugin:3.8.1`

## ▶️ Usage

```bash
cd "JAVA FS Engineer/PROGRAMING LANGUAGES/TDD using JUnit5 and Mockito/Mockito exercises/Verifying Interactions"
mvn clean test
```

Expected result: **3 tests run, 0 failures**, with console output:
```
testVerifyInteraction passed.
testVerifyInteractionWithArguments passed.
testVerifyPostData passed.
```

## 🔗 Related Folders

- [Mocking and Stubbing](<../Mocking and Stubbing/README.md>) — companion exercise focusing on `when()/thenReturn()`
- [Mockito exercises](../README.md)
- [JUnit_Basic Testing Exercises](<../../JUnit_Basic Testing Exercises/README.md>)
- [Repository root](../../../../../README.md)
