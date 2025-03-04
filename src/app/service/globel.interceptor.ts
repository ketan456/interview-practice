import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, throwError } from 'rxjs';

export const globelInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('ketan');
  const authToken = 'Bearer YOUR_JWT_TOKEN_HERE';
  // const authToken = inject(AuthService);

  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: authToken,
    },
  });

  return next(modifiedReq).pipe(
    finalize(() => {
      setTimeout(() => {
      }, 100);
    }),
    catchError((err) => {
      return handleAuthError(err); // Handle authentication errors
    })
  );
};

// 🔹 Authentication Error Handler Function
function handleAuthError(error: any) {
  console.error('Auth Error:', error);
  return throwError(() => error);
}
