package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApp {

    public static void main(String[] args) {

        ApplicationContext context =
            new ClassPathXmlApplicationContext("applicationContext.xml");

        LibraryService libraryService =
            (LibraryService) context.getBean("libraryService");

        libraryService.serve();

        System.out.println("Maven project with Spring Context, AOP and WebMVC configured successfully!");
    }
}