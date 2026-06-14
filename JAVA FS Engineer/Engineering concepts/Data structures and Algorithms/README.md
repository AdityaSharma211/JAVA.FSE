# Data Structures and Algorithms

## 📌 Purpose

Practice exercises demonstrating fundamental algorithms — **search algorithms** and **recursion** — applied to realistic banking/e-commerce style scenarios, including time/space complexity (Big-O) analysis.

## 📂 Files

| File | Description |
|------|-------------|
| `EcommerceSearchExample.java` | Implements **Linear Search** and **Binary Search** over an array of `Product` objects (an e-commerce catalog) and compares their efficiency. |
| `FinancialForecasting.java` | Implements a **recursive algorithm** (`futureValue`) that projects the future value of an investment given a growth rate and number of years — a financial forecasting use case. |

## 🔍 File Details

### `EcommerceSearchExample.java`
- Defines a `Product` class with `productId`, `productName`, and `category`.
- `linearSearch(Product[] products, int id)` — scans the array sequentially. Best case O(1), average/worst case O(n).
- `binarySearch(Product[] products, int id)` — requires a sorted array (sorted via `Arrays.sort` with `Comparator.comparingInt`); best case O(1), average/worst case O(log n).
- `main` demonstrates both searches on a sample product catalog and prints the results.
- **Conclusion (from in-file analysis):** Binary Search is preferred for large e-commerce catalogs since it scales much better than Linear Search on sorted data.

### `FinancialForecasting.java`
- `futureValue(double currentValue, double growthRate, int years)` — recursively compounds `currentValue` by `growthRate` for the given number of `years`.
- `main` calculates the future value of $10,000 at a 10% annual growth rate over 5 years.
- **Complexity:** O(n) time and O(n) space (due to the recursive call stack).
- **Optimization note (from in-file analysis):** An iterative approach or memoization would reduce memory usage for large inputs.

## 📦 Dependencies

None — both files use only the Java standard library (`java.util.Arrays`, `java.util.Comparator`).

## ▶️ Usage

```bash
cd "JAVA FS Engineer/Engineering concepts/Data structures and Algorithms"

# Run the search example
javac EcommerceSearchExample.java
java EcommerceSearchExample
# Output:
# Linear Search Result: Shoes
# Binary Search Result: Shoes

# Run the recursion example
javac FinancialForecasting.java
java FinancialForecasting
# Output:
# Future Value after 5 years = 16105.100000000006
```

## 🔗 Related Folders

- [Design principles & Patterns](<../Design principles & Patterns/README.md>) — sibling module on software design
- [Engineering concepts](../README.md)
- [Repository root](../../../README.md)
