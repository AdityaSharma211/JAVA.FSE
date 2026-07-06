package com.cognizant.springlearn.service;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;

@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    // Injects the "countryList" bean (a util:list) defined in country.xml
    @Resource(name = "countryList")
    private List<Country> countryList;

    public Country getCountry(String code) {
        LOGGER.debug("Start getCountry() method. code={}", code);

        // Case-insensitive match using a lambda expression / Stream API
        Country matchedCountry = countryList.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);

        LOGGER.debug("End getCountry() method.");
        return matchedCountry;
    }
}
