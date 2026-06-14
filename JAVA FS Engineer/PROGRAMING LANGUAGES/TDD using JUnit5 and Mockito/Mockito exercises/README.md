# Mockito Exercises

## 📌 Purpose

Practice exercises for **mocking dependencies** with Mockito and JUnit 5 (Jupiter). Both exercises use the same `MyService` + `ExternalApi` design — a service class that depends on an external API interface — to demonstrate **stubbing return values** and **verifying interactions** with the mock.

## 📂 Contents

| Folder | Description |
|--------|-------------|
| [`Mocking and Stubbing/`](<Mocking and Stubbing/README.md>) | Creates a mock `ExternalApi`, stubs its return values with `when(...).thenReturn(...)`, and asserts the results returned by `MyService`. |
| [`Verifying Interactions/`](<Verifying Interactions/README.md>) | Uses the same mock setup but focuses on **verifying** how the mock was called, using `verify()`, `times()`, `never()`, and `anyInt()`. |

## 🔍 Shared Design

Both exercises share the same two production classes:

```java
// ExternalApi.java
public interface ExternalApi {
    String getData();
    String getDataById(int id);
    boolean postData(String data);
}

// MyService.java
public class MyService {
    private ExternalApi externalApi;
    public MyService(ExternalApi externalApi) { this.externalApi = externalApi; }
    public String fetchData()              { return externalApi.getData(); }
    public String fetchDataById(int id)    { return externalApi.getDataById(id); }
    public boolean sendData(String data)   { return externalApi.postData(data); }
}
```

`MyService` is a thin wrapper that delegates to `ExternalApi` — making it an ideal candidate for mocking the external dependency in tests.

## 📦 Dependencies

- `org.junit.jupiter:junit-jupiter:5.10.0` (test scope)
- `org.mockito:mockito-core:5.5.0` (test scope)
- `org.mockito:mockito-junit-jupiter:5.5.0` (test scope)
- `org.apache.maven.plugins:maven-surefire-plugin:3.1.2`
- Java 8 via `maven-compiler-plugin:3.8.1`

## ▶️ Usage

```bash
cd "Mocking and Stubbing"      # or "Verifying Interactions"
mvn clean test
```

## 🔗 Related Folders

- [Mocking and Stubbing](<Mocking and Stubbing/README.md>)
- [Verifying Interactions](<Verifying Interactions/README.md>)
- [JUnit_Basic Testing Exercises](<../JUnit_Basic Testing Exercises/README.md>)
- [TDD using JUnit5 and Mockito](../README.md)
- [Repository root](../../../../README.md)
