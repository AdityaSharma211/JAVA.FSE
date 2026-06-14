package com.bank;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        assertEquals("Mock Data", result);
        System.out.println("testExternalApi passed.");
    }

    @Test
    public void testExternalApiById() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        when(mockApi.getDataById(1)).thenReturn("Mock Data for ID 1");

        MyService service = new MyService(mockApi);
        String result = service.fetchDataById(1);

        assertEquals("Mock Data for ID 1", result);
        System.out.println("testExternalApiById passed.");
    }

    @Test
    public void testExternalApiPostData() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        when(mockApi.postData("Test")).thenReturn(true);

        MyService service = new MyService(mockApi);
        boolean result = service.sendData("Test");

        assertTrue(result);
        System.out.println("testExternalApiPostData passed.");
    }
}