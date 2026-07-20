# Bank Microservices — Account & Loan

This repository contains two independent Spring Boot microservices built as part of a
hands-on exercise on microservices architecture. Each service is a **separate Maven
project** with its own `pom.xml`, and neither has any real backend/database
connectivity — both return static dummy data.

```
microservices/
├── account/     -> Account microservice (runs on port 8080)
└── loan/        -> Loan microservice (runs on port 8081)
```

## Account Microservice

- **Group:** `com.cognizant`
- **Artifact:** `account`
- **Dependencies:** Spring Web, Spring Boot DevTools

### Endpoint
| Method | URL | Sample Response |
|--------|-----|------------------|
| GET | `/accounts/{number}` | `{ "number": "00987987973432", "type": "savings", "balance": 234343 }` |

### Run
```bash
cd account
mvn clean package
mvn spring-boot:run
```
Runs on default port **8080**.

Test: `http://localhost:8080/accounts/00987987973432`

---

## Loan Microservice

- **Group:** `com.cognizant`
- **Artifact:** `loan`
- **Dependencies:** Spring Web, Spring Boot DevTools

### Endpoint
| Method | URL | Sample Response |
|--------|-----|------------------|
| GET | `/loans/{number}` | `{ "number": "H00987987972342", "type": "car", "loan": 400000, "emi": 3258, "tenure": 18 }` |

### Run
```bash
cd loan
mvn clean package
mvn spring-boot:run
```

Because the account service already occupies port 8080, the loan service is
configured to run on port **8081** via `src/main/resources/application.properties`:

```properties
server.port=8081
```

Test: `http://localhost:8081/loans/H00987987972342`

---

## Running Both Together

1. Start the account service first (port 8080).
2. Start the loan service (port 8081) — without the `server.port` override this
   would fail with `Web server failed to start. Port 8080 was already in use.`
3. Both services are now reachable independently, demonstrating the core idea
   of microservices: small, independently deployable, independently scalable
   applications each owning a single business capability (accounts, loans)
   rather than one monolithic app handling both.

## Tech Stack
- Java 17
- Spring Boot 3.2.5
- Spring Web (REST controllers)
- Spring Boot DevTools
- Maven
