import { CanActivateFn, Router} from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);

  const access_token = localStorage.getItem('access_token');
  
  if (typeof window !== 'undefined' && localStorage.getItem('access_token') !== null) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};




