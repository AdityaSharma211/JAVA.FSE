import { HttpInterceptorFn } from '@angular/common/http';

// Interceptors run in registration order on the request; responses travel
// back through them in reverse order.
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cloned = req.clone({
    setHeaders: { Authorization: 'Bearer mock-token-12345' },
  });
  return next(cloned);
};
