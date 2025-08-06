import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocurrió un error inesperado.';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        if (error.status === 404) {
          errorMessage = 'El recurso solicitado no fue encontrado.';
          router.navigate(['/not-found']);
        } else if (error.status === 401) {
          errorMessage = 'No estás autorizado para acceder a este recurso.';
          router.navigate(['/login']);
        } else {
          errorMessage = `Código de error: ${error.status}, mensaje: ${error.message}`;
        }
      }
      
      console.error(errorMessage);
      
      return throwError(() => new Error(errorMessage));
    })
  );
};