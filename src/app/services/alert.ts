import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root', 
})
export class AlertService {
  success(message: string, title = 'Success') {
    Swal.fire({
      icon: 'success',
      title,
      text: message,
    });
  }

  error(message: string, title = 'Error') {
    Swal.fire({
      icon: 'error',
      title,
      text: message,
    });
  }

  info(message: string, title = 'Info') {
    Swal.fire({
      icon: 'info',
      title,
      text: message,
    });
  }
}
