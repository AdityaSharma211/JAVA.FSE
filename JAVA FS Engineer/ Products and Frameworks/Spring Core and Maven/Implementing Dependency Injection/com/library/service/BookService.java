package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter method - Spring calls this to inject BookRepository
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookService: BookRepository injected successfully.");
    }

    public void getBooks() {
        System.out.println("BookService: Delegating to BookRepository...");
        bookRepository.findAll();
    }
}