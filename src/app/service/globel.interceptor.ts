import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize, throwError } from 'rxjs';
import { LoadingService } from './loading/loading.service';

export const globelInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('ketan form interceptor');
  const authToken = 'Bearer YOUR_JWT_TOKEN_HERE';
  // const authToken = inject(AuthService);
  const loadingService = inject(LoadingService);

  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: authToken,
    },
  });
  console.log(req.url);
  if(!req.url.includes('jsonplaceholder')){

    loadingService.show();
  }
  return next(modifiedReq).pipe(
    finalize(() => {
      setTimeout(() => {
        loadingService.hide();
   
      }, 100);
    }),
    catchError((err) => {
      setTimeout(() => {
        loadingService.hide();
      }, 100);
      return handleAuthError(err); // Handle authentication errors
    })
  );
};

// 🔹 Authentication Error Handler Function
function handleAuthError(error: any) {
  console.error('Auth Error:', error);
  return throwError(() => error);
}
