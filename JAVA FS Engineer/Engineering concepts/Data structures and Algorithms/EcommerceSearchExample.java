// Step 1: Understand Asymptotic Notation
// Big O Notation is used to measure the efficiency of an algorithm
// as the input size grows.
// Linear Search: Best O(1), Average O(n), Worst O(n)
// Binary Search: Best O(1), Average O(log n), Worst O(log n)

import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
}

public class EcommerceSearchExample {

    // Step 3: Linear Search
    public static Product linearSearch(Product[] products, int id) {
        for (Product p : products) {
            if (p.productId == id) {
                return p;
            }
        }
        return null;
    }

    // Step 3: Binary Search
    public static Product binarySearch(Product[] products, int id) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].productId == id)
                return products[mid];

            if (products[mid].productId < id)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {

        // Step 2: Create Product Array
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories")
        };

        // Linear Search
        Product result1 = linearSearch(products, 103);
        System.out.println("Linear Search Result: "
                + result1.productName);

        // Sort array for Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        Product result2 = binarySearch(products, 103);
        System.out.println("Binary Search Result: "
                + result2.productName);
    }
}
/*
Analysis:----
Linear Search Time Complexity:
Best Case: O(1)
Average Case: O(n)
Worst Case: O(n)
Binary Search Time Complexity:
Best Case: O(1)
Average Case: O(log n)
Worst Case: O(log n)
Result:----
Binary Search is more suitable for large e-commerce platforms 
because it searches much faster than Linear Search when data is sorted. 
*/