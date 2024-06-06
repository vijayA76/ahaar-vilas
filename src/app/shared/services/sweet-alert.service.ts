import { Injectable } from '@angular/core';
import { SweetAlert } from '@shared/interfaces';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  public showAlertPopup(response: SweetAlert): void {
    Swal.fire({
      title: response.title,
      text: response.text,
      icon: response.icon,
      iconColor: response.icon == 'success' ? '#78ae2e' : response.icon == 'error' ? '#ee5941' : response.icon == 'info' ? '' : '',
      confirmButtonText: 'Ok',
      buttonsStyling: false,
      customClass: {
        confirmButton: `btn btn-primary px-4 swal-button`,
      },
    });
  }

}
