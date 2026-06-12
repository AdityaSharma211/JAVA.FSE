// Step 1: Create a new Java project named SingletonPatternExample.
// Step 2 & 3: Define and Implement Singleton Class
class Logger {
    private static Logger instance;

    private Logger() {
        System.out.println("Logger Instance Created");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}

// Step 4: Test Singleton Implementation
public class SingletonPatternExample {
    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Application Started");
        logger2.log("Processing Data");

        System.out.println("logger1 HashCode: " + logger1.hashCode());
        System.out.println("logger2 HashCode: " + logger2.hashCode());

        if (logger1 == logger2) {
            System.out.println("Only one Logger instance exists.");
        } else {
            System.out.println("Multiple Logger instances exist.");
        }
    }
}