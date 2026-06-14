# PL/SQL Programming

## 📌 Purpose

This folder contains **Oracle PL/SQL** practice scripts built around a small banking domain (customers, loans, accounts, employees). The exercises cover **control structures** (loops, conditionals, exception handling) and **stored procedures** for common banking operations.

## 📂 Files

| File | Description |
|------|-------------|
| `ControlStructures` | A PL/SQL script that creates `Customers` and `Loans` tables, seeds sample data, and runs an anonymous `DECLARE/BEGIN/END` block demonstrating `FOR` loops, `IF/ELSE` conditionals, and exception handling across 3 scenarios. |
| `StoredProcedures` | A PL/SQL script that creates `Customers`, `Loans`, `Accounts`, and `Employees` tables, seeds sample data, and defines three reusable **stored procedures** for monthly interest, employee bonuses, and fund transfers. |

> **Naming note:** Both files are plain-text SQL scripts without a file extension. For better tooling/IDE support and GitHub syntax highlighting, consider renaming them to `ControlStructures.sql` and `StoredProcedures.sql`.

## 🔍 File Details

### `ControlStructures`
Schema: `Customers (CustomerID, Name, DOB, Balance, IsVIP)`, `Loans (LoanID, CustomerID, InterestRate, DueDate)`.

The anonymous block demonstrates:
1. **Scenario 1 — Age-Based Interest Discount:** Loops through customers, calculates age from `DOB` using `MONTHS_BETWEEN`, and reduces `InterestRate` by 1 for customers over 60.
2. **Scenario 2 — VIP Status by Balance:** Loops through customers and sets `IsVIP = 'TRUE'` for balances over 10,000, otherwise `'FALSE'`.
3. **Scenario 3 — Loan Due Reminders:** Finds loans due within the next 30 days, looks up the customer name (handling `NO_DATA_FOUND`), and prints a reminder.

A top-level `EXCEPTION WHEN OTHERS` block rolls back and prints `SQLERRM` on any error.

### `StoredProcedures`
Schema: `Customers`, `Loans`, `Accounts (AccountID, CustomerID, AccountType, Balance)`, `Employees (EmployeeID, Name, DepartmentID, Salary)`.

Defines three procedures:
- **`ProcessMonthlyInterest`** — adds 1% interest to all `Savings` accounts.
- **`UpdateEmployeeBonus(p_department_id, p_bonus_percent)`** — raises salaries by a given percentage for all employees in a department; validates `p_bonus_percent > 0` and reports if no employees are found.
- **`TransferFunds(p_from_account, p_to_account, p_amount)`** — transfers funds between accounts with validation for positive amount, sufficient balance (`FOR UPDATE` row lock), and existence of the destination account.

A final anonymous block calls all three procedures in sequence as a demo.

## 📦 Dependencies

- An Oracle Database instance (or a compatible PL/SQL environment such as **Oracle SQL Developer**, **SQL*Plus**, or **Oracle LiveSQL**)
- `DBMS_OUTPUT` enabled (`SET SERVEROUTPUT ON` in SQL*Plus/SQL Developer) to see printed messages

## ▶️ Usage

In SQL*Plus or Oracle SQL Developer:

```sql
SET SERVEROUTPUT ON;

-- Run the control structures exercise
@ControlStructures

-- Run the stored procedures exercise
@StoredProcedures
```

Or copy-paste the script contents directly into a SQL worksheet and execute as a script (F5 in SQL Developer).

## 🔗 Related Folders

- [SLF4J logging framework](<../SLF4J logging framework/README.md>)
- [TDD using JUnit5 and Mockito](<../TDD using JUnit5 and Mockito/README.md>)
- [PROGRAMING LANGUAGES](../README.md)
- [Repository root](../../../README.md)
