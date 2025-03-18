import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize, throwError } from 'rxjs';
import { LoadingService } from './loading/loading.service';
import { COMPONENT_IDENTIFIER } from '../../shared/context-tokens';
import { AuthService } from './auth/auth-service.service';

export const globelInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('ketan form interceptor');
  const authService = inject(AuthService);
  const loadingService = inject(LoadingService);

  const authToken = authService.getToken();

  if (authToken && authService.isAuthenticated()) {
    console.log('is authenticaed');
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: authToken,
      },
    });
    const componentId = req.context.get(COMPONENT_IDENTIFIER);
    if (
      componentId != 'InfiniteScrollerViewComponent' &&
      req.url.includes('jsonplaceholder.typicode.com')
    ) {
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
  } else {
    console.log('is not');

    return next(req).pipe(
      finalize(() => {}),
      catchError((err) => {
        console.log(req);
        return handleAuthError(err); // Handle authentication errors
      })
    );
  }
};

// 🔹 Authentication Error Handler Function
function handleAuthError(error: any) {
  console.error('Auth Error:', error);
  return throwError(() => error);
}
