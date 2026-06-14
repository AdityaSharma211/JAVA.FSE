# JAVA.FSE — Java Full Stack Engineering Practice

Deep-skilling practice repository for acquiring multiple Java Full Stack Engineering skills — covering core engineering concepts (data structures, algorithms, design patterns), logging, automated testing (JUnit & Mockito), and PL/SQL database programming.

Every exercise lives in its own folder with a dedicated `README.md` describing its purpose, files, dependencies, and how to run it.

## 📂 Repository Structure

```
JAVA.FSE/
├── JAVA FS Engineer/
│   └── Engineering concepts/
│       ├── Data structures and Algorithms/
│       └── Design principles & Patterns/
└── PROGRAMING LANGUAGES/
    ├── PL:SQL programming/
    ├── SLF4J logging framework/
    └── TDD using JUnit5 and Mockito/
        ├── JUnit_Basic Testing Exercises/
        │   ├── Setting Up JUnit/
        │   ├── Assertions in JUnit/
        │   └── Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup andTeardown Methods in JUnit/
        └── Mockito exercises/
            ├── Mocking and Stubbing/
            └── Verifying Interactions/
```

## 🚀 Topics Covered

| Area | Folder | Description |
|------|--------|-------------|
| Data Structures & Algorithms | [`JAVA FS Engineer/Engineering concepts/Data structures and Algorithms`](<JAVA FS Engineer/Engineering concepts/Data structures and Algorithms/README.md>) | Linear/binary search and recursion, with complexity analysis |
| Design Patterns | [`JAVA FS Engineer/Engineering concepts/Design principles & Patterns`](<JAVA FS Engineer/Engineering concepts/Design principles & Patterns/README.md>) | Singleton and Factory Method patterns |
| PL/SQL Programming | [`PROGRAMING LANGUAGES/PL:SQL programming`](<PROGRAMING LANGUAGES/PL:SQL programming/README.md>) | Control structures, stored procedures, banking schema |
| Logging with SLF4J | [`PROGRAMING LANGUAGES/SLF4J logging framework`](<PROGRAMING LANGUAGES/SLF4J logging framework/README.md>) | SLF4J + Logback logging levels demo |
| TDD with JUnit & Mockito | [`PROGRAMING LANGUAGES/TDD using JUnit5 and Mockito`](<PROGRAMING LANGUAGES/TDD using JUnit5 and Mockito/README.md>) | Unit testing, assertions, fixtures, mocking, and verification |

## 🛠️ Tech Stack

- **Language:** Java 8
- **Build Tool:** Maven (each exercise folder containing a `pom.xml` is an independent Maven project)
- **Testing:** JUnit 4, JUnit 5 (Jupiter), Mockito
- **Logging:** SLF4J + Logback
- **Database:** Oracle PL/SQL

## ▶️ How to Run Any Module

Each Maven-based exercise is self-contained. From inside that folder:

```bash
mvn clean package
mvn exec:java -Dexec.mainClass="com.bank.<ClassName>"   # for runnable examples
mvn test                                                  # for JUnit/Mockito exercises
```

PL/SQL scripts are run inside an Oracle SQL client (SQL*Plus, SQL Developer, etc.) — see the [PL/SQL programming README](<PROGRAMING LANGUAGES/PL:SQL programming/README.md>) for details.

## 📌 Purpose

This repository serves as a personal learning log and reference for Java fundamentals, software engineering best practices, automated testing, logging, and database programming — built as part of an ongoing self-development and skill-building journey.

## 👤 Author

**Aditya Sharma**
- LinkedIn: [aditya-sharma-b35250294](https://www.linkedin.com/in/aditya-sharma-b35250294/)
- GitHub: [@AdityaSharma211](https://github.com/AdityaSharma211)
