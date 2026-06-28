# orm-learn — Spring Data JPA Quick Example

## Project Structure

```
orm-learn/
├── pom.xml                                          ← Maven build file
├── setup.sql                                        ← MySQL DDL + sample data
└── src/
    ├── main/
    │   ├── java/com/cognizant/ormlearn/
    │   │   ├── OrmLearnApplication.java             ← Main class + testGetAllCountries()
    │   │   ├── model/
    │   │   │   └── Country.java                     ← @Entity mapping to country table
    │   │   ├── repository/
    │   │   │   └── CountryRepository.java           ← JpaRepository (no impl needed)
    │   │   └── service/
    │   │       └── CountryService.java              ← @Service with getAllCountries()
    │   └── resources/
    │       └── application.properties               ← DB + Hibernate + log config
    └── test/
        └── java/com/cognizant/ormlearn/
            └── OrmLearnApplicationTests.java        ← Context load test
```

---

## Step-by-Step Setup

### 1. MySQL — Create Schema and Table

Open MySQL Workbench or run in the CLI:

```bash
mysql -u root -p
```

Then run the `setup.sql` file (or paste the commands):

```sql
CREATE SCHEMA IF NOT EXISTS ormlearn;
USE ormlearn;

CREATE TABLE country (
    co_code VARCHAR(2)  PRIMARY KEY,
    co_name VARCHAR(50) NOT NULL
);

INSERT INTO country VALUES ('IN', 'India');
INSERT INTO country VALUES ('US', 'United States of America');
```

---

### 2. Update DB Password (if needed)

Open `src/main/resources/application.properties` and change:

```properties
spring.datasource.password=root    ← replace with your MySQL root password
```

---

### 3. Build the Project

```bash
cd orm-learn

# Without proxy:
mvn clean package

# With Cognizant corporate proxy:
mvn clean package \
  -Dhttp.proxyHost=proxy.cognizant.com  -Dhttp.proxyPort=6050 \
  -Dhttps.proxyHost=proxy.cognizant.com -Dhttps.proxyPort=6050 \
  -Dhttp.proxyUser=<YOUR_EMPLOYEE_ID>
```

---

### 4. Run the Application

```bash
mvn spring-boot:run
```

Or right-click `OrmLearnApplication.java` → **Run As → Spring Boot App** in Eclipse.

---

### 5. Expected Console Output

```
Inside main
Start
Inside getAllCountries
Hibernate: select ... from country
Fetched 2 countries
countries=[Country{code='IN', name='India'}, Country{code='US', name='United States of America'}]
End
```

---

## Key Concepts

| Annotation | Where | Purpose |
|---|---|---|
| `@SpringBootApplication` | `OrmLearnApplication` | Enables auto-config + component scan |
| `@Entity` | `Country` | Marks class as a JPA-managed entity |
| `@Table(name="country")` | `Country` | Maps entity to the `country` DB table |
| `@Id` | `Country.code` | Declares the primary key |
| `@Column(name="co_code")` | `Country.code` | Maps field to exact column name |
| `@Repository` | `CountryRepository` | Marks as Spring bean + exception translation |
| `@Service` | `CountryService` | Marks as Spring service bean |
| `@Autowired` | `countryRepository` | Injects the repository bean |
| `@Transactional` | `getAllCountries()` | Wraps method in a DB transaction |
