package com.bank;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);
        service.fetchData();

        verify(mockApi).getData();
        verify(mockApi, times(1)).getData();
        verify(mockApi, never()).getDataById(anyInt());

        System.out.println("testVerifyInteraction passed.");
    }

    @Test
    public void testVerifyInteractionWithArguments() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        when(mockApi.getDataById(42)).thenReturn("Data for 42");

        MyService service = new MyService(mockApi);
        service.fetchDataById(42);

        verify(mockApi).getDataById(42);
        verify(mockApi, never()).getDataById(99);

        System.out.println("testVerifyInteractionWithArguments passed.");
    }

    @Test
    public void testVerifyPostData() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        when(mockApi.postData("Hello")).thenReturn(true);

        MyService service = new MyService(mockApi);
        service.sendData("Hello");

        verify(mockApi).postData("Hello");
        verify(mockApi, times(1)).postData("Hello");

        System.out.println("testVerifyPostData passed.");
    }
}