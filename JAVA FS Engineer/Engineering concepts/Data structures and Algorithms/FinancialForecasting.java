// Step 1: Understand Recursive Algorithms
// Recursion is a technique where a method calls itself
// to solve a problem by breaking it into smaller subproblems.

public class FinancialForecasting {

    // Step 2 & 3:
    // Recursive method to calculate future value
    public static double futureValue(double currentValue,
                                     double growthRate,
                                     int years) {

        if (years == 0)
            return currentValue;

        return futureValue(
                currentValue * (1 + growthRate),
                growthRate,
                years - 1);
    }

    public static void main(String[] args) {

        double presentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double result = futureValue(
                presentValue,
                growthRate,
                years);

        System.out.println("Future Value after "
                + years + " years = " + result);
    }
}
/*
Analysis:---------
Time Complexity: O(n)
The recursive function makes one recursive call for each year.
Space Complexity: O(n)
Due to recursive call stack.
Optimization:
Use an iterative approach instead of recursion to reduce memory usage.
Dynamic Programming (Memoization) can be used for more complex recursive problems to
avoid repeated calculations.
Result:---------
The recursive algorithm successfully predicts future financial values based on a fixed growth rate.
Recursion makes the solution simple and easy to understand, though iterative methods are more memory 
efficient for large inputs.
*/