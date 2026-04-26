import { CanActivateFn,Router } from '@angular/router';
import{ inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const user = localStorage.getItem('userEmail');
    if (!user) {
    router.navigate(['/login']);
    return false;
    }
    else {
      return true;
    }

  
};
