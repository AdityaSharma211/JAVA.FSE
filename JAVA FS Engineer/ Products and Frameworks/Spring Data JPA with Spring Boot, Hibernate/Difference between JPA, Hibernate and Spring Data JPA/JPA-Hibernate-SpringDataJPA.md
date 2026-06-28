# Difference between JPA, Hibernate and Spring Data JPA

---

## The Hierarchy

```
┌─────────────────────────────────────────┐
│           Spring Data JPA               │  ← Abstraction layer (reduces boilerplate)
│  (no JPA implementation of its own)     │
└────────────────┬────────────────────────┘
                 │ uses
┌────────────────▼────────────────────────┐
│              JPA                        │  ← Specification only (JSR 338), no code
│   (Java Persistence API - interface)    │
└────────────────┬────────────────────────┘
                 │ implemented by
┌────────────────▼────────────────────────┐
│            Hibernate                    │  ← Actual ORM implementation
│    (one of many JPA providers)          │
└─────────────────────────────────────────┘
```

---

## 1. JPA — Java Persistence API

- **What it is:** A specification (JSR 338), not a library — just a set of interfaces and rules
- **What it does:** Defines *how* Java objects should be persisted, read, and managed in a database
- **What it doesn't do:** Contains zero working code — no actual implementation
- **Analogy:** Like a job description — it says what needs to be done, but doesn't do the work itself

---

## 2. Hibernate

- **What it is:** A concrete ORM (Object-Relational Mapping) tool that *implements* JPA
- **What it does:** Does the actual heavy lifting — manages sessions, transactions, SQL generation
- **Extra:** Hibernate also has features *beyond* JPA (its own native API)
- **Analogy:** The actual employee hired based on the JPA job description

---

## 3. Spring Data JPA

- **What it is:** An abstraction layer *on top of* JPA (and therefore on top of Hibernate)
- **What it does:** Eliminates boilerplate — no need to write Session, Transaction, try/catch/rollback manually
- **What it doesn't do:** Has no JPA implementation of its own — delegates to Hibernate under the hood
- **Analogy:** A manager who handles all the paperwork so the employee (Hibernate) can just focus on the work

---

## Code Comparison

### Hibernate (raw) — saving an Employee

```java
public Integer addEmployee(Employee employee) {
    Session session = factory.openSession();   // manually open session
    Transaction tx = null;
    Integer employeeID = null;

    try {
        tx = session.beginTransaction();       // manually begin transaction
        employeeID = (Integer) session.save(employee);
        tx.commit();                           // manually commit

    } catch (HibernateException e) {
        if (tx != null) tx.rollback();         // manually rollback on error
        e.printStackTrace();

    } finally {
        session.close();                       // manually close session
    }
    return employeeID;
}
```

Problems with this approach:
- Lots of repetitive boilerplate in every method
- Must manually handle open → begin → commit → rollback → close
- Easy to forget session.close() and cause connection leaks

---

### Spring Data JPA — same operation

**EmployeeRepository.java**
```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    // Nothing needed — save(), findAll(), findById(), delete() etc. all come free
}
```

**EmployeeService.java**
```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional                          // Spring handles begin/commit/rollback
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);  // one line replaces ~20 lines of Hibernate code
}
```

---

## Side-by-Side Comparison Table

| Feature | JPA | Hibernate | Spring Data JPA |
|---|---|---|---|
| Type | Specification | Implementation | Abstraction layer |
| Contains working code? | No | Yes | Partially |
| Manages Sessions? | No | Yes (manually) | Yes (automatically) |
| Manages Transactions? | No | Yes (manually) | Yes (@Transactional) |
| Boilerplate code | N/A | High | Very low |
| Custom queries | N/A | HQL / Native SQL | Method names / @Query |
| Who uses it directly? | Nobody (interface only) | Advanced use cases | Most Spring apps |

---

## Key Takeaway

> **JPA** defines the rules → **Hibernate** does the actual database work → **Spring Data JPA** wraps it all so you write minimal code.

In the orm-learn project, all three are working together:
- `@Entity`, `@Table`, `@Column`, `@Id` → **JPA annotations**
- The actual SQL generation and execution → **Hibernate** (under the hood)
- `JpaRepository`, `@Transactional`, `@Repository` → **Spring Data JPA**
