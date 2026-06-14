# PROGRAMING LANGUAGES

## 📌 Purpose

This folder contains practice exercises covering different programming **languages, frameworks, and tools** used in full-stack Java development: PL/SQL for database programming, SLF4J/Logback for application logging, and JUnit/Mockito for automated testing.

## 📂 Contents

| Folder | Description |
|--------|-------------|
| [`PL:SQL programming/`](<PL:SQL programming/README.md>) | Oracle PL/SQL scripts covering control structures and stored procedures for a simple banking schema |
| [`SLF4J logging framework/`](<SLF4J logging framework/README.md>) | SLF4J + Logback demo showing all logging levels (trace, debug, info, warn, error) |
| [`TDD using JUnit5 and Mockito/`](<TDD using JUnit5 and Mockito/README.md>) | Test-Driven Development exercises using JUnit 4/5 and Mockito |

## 📦 Dependencies

Varies per sub-folder — see each folder's README and `pom.xml` for exact versions. In summary:

- **PL/SQL programming** — requires an Oracle Database (or compatible PL/SQL engine such as Oracle SQL Developer / SQL*Plus / LiveSQL)
- **SLF4J logging framework** — `slf4j-api`, `logback-classic` (Maven)
- **TDD using JUnit5 and Mockito** — `junit` (4.x), `junit-jupiter` (5.x), `mockito-core`, `mockito-junit-jupiter` (Maven)

## ▶️ Usage

Each Java-based sub-folder is an independent Maven project. From inside that folder:

```bash
mvn clean package
mvn test
```

For the PL/SQL folder, run the scripts in an Oracle SQL client — see its README for details.

## 🔗 Related Folders

- [PL:SQL programming](<PL:SQL programming/README.md>)
- [SLF4J logging framework](<SLF4J logging framework/README.md>)
- [TDD using JUnit5 and Mockito](<TDD using JUnit5 and Mockito/README.md>)
- [JAVA FS Engineer](../README.md)
- [Repository root](../../README.md)
