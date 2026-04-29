import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('authtoken');
  const authReq = token ? req.clone({
    setHeaders:{Authorization:`Bearer ${token}`}
  }):req;
  return next(authReq);
};
