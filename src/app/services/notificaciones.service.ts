import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor( private toastr: ToastrService) { }

  createNotification(data_notification:any){

    switch (data_notification.s) {
      case true:
          this.successNotification(data_notification.msj);
          break;
      case false:
            this.errorNotification(data_notification.msj);
          break;
    }

  }

  successNotification(msj){
    this.toastr.success(msj);
  }

  errorNotification(msj){
    this.toastr.error(msj);
  }

}
