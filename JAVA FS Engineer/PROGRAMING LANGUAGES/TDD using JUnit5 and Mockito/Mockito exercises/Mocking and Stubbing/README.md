# Mocking and Stubbing

## 📌 Purpose

Demonstrates the basics of **mocking and stubbing** with Mockito: creating a mock of `ExternalApi`, defining its behavior with `when(...).thenReturn(...)`, and asserting that `MyService` correctly returns the stubbed values.

## 📂 Files

| File | Description |
|------|-------------|
| `ExternalApi.java` | Interface with `getData()`, `getDataById(int id)`, and `postData(String data)` — represents a third-party/external dependency. |
| `MyService.java` | Service class that depends on `ExternalApi` (injected via constructor) and delegates each method call to it. |
| `MyServiceTest.java` | JUnit 5 + Mockito test class with three stubbing-focused tests. |
| `pom.xml` | Maven project descriptor (`artifactId: MockitoExercises`) declaring JUnit 5 and Mockito dependencies. |

## 🔍 File Details

### `MyServiceTest.java`
- **`testExternalApi()`** — mocks `ExternalApi`, stubs `getData()` to return `"Mock Data"`, then asserts `service.fetchData()` returns `"Mock Data"`.
- **`testExternalApiById()`** — stubs `getDataById(1)` to return `"Mock Data for ID 1"`, then asserts `service.fetchDataById(1)` returns that value.
- **`testExternalApiPostData()`** — stubs `postData("Test")` to return `true`, then asserts `service.sendData("Test")` returns `true`.

Each test creates the mock with `Mockito.mock(ExternalApi.class)`, uses `when(...).thenReturn(...)` for stubbing, and uses JUnit 5's `assertEquals`/`assertTrue` for assertions.

## 📦 Dependencies

- `org.junit.jupiter:junit-jupiter:5.10.0` (test scope)
- `org.mockito:mockito-core:5.5.0` (test scope)
- `org.mockito:mockito-junit-jupiter:5.5.0` (test scope)
- `org.apache.maven.plugins:maven-surefire-plugin:3.1.2`
- Java 8 via `maven-compiler-plugin:3.8.1`

## ▶️ Usage

```bash
cd "JAVA FS Engineer/PROGRAMING LANGUAGES/TDD using JUnit5 and Mockito/Mockito exercises/Mocking and Stubbing"
mvn clean test
```

Expected result: **3 tests run, 0 failures**, with console output:
```
testExternalApi passed.
testExternalApiById passed.
testExternalApiPostData passed.
```

## 🔗 Related Folders

- [Verifying Interactions](<../Verifying Interactions/README.md>) — companion exercise focusing on `verify()`
- [Mockito exercises](../README.md)
- [JUnit_Basic Testing Exercises](<../../JUnit_Basic Testing Exercises/README.md>)
- [Repository root](../../../../../README.md)
