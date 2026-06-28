package com.cognizant.ormlearn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.repository.EmployeeRepository;
@Service
public class EmployeeService {

    // Spring injects EmployeeRepository bean automatically
    @Autowired
    private EmployeeRepository employeeRepository;

    /**
     * Save (INSERT) a new employee.
     * @Transactional handles begin / commit / rollback automatically.
     */
    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);  // replaces ~20 lines of Hibernate boilerplate
    }
}
