package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApp {

    public static void main(String[] args) {

        ApplicationContext context =
            new ClassPathXmlApplicationContext("applicationContext.xml");

        // BookRepository is already injected into BookService by Spring
        BookService bookService = (BookService) context.getBean("bookService");

        bookService.getBooks();
    }
}