import { Component, OnInit } from '@angular/core';

import { ReservacionService } from '../../services/reservacion.service';
import { NgForm } from '@angular/forms';
import { Reservacion } from '../../models/reservacion';
import { Habitaciontipo } from '../../models/habitaciontipo';
declare var M: any;

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css'],
  providers: [ ReservacionService ]
})
export class ReservacionComponent implements OnInit {
//select: number;

restaFechas = function(f1,f2)
 {
 var aFecha1 = f1.split('/');
 var aFecha2 = f2.split('/');
 var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
 var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
 var dif = fFecha2 - fFecha1;
 var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
 return dias;
 }
Habitaciontipo: Habitaciontipo[] = [ 
  {id: 1, name: 'Habitacion Doble'},
  {id: 2, name: 'Habitacion King-size'},
  {id: 3, name: 'Habitacion Suite'}
]
  constructor(private reservacionService: ReservacionService) { }

  ngOnInit() {
    this.getReservaciones();
   // this.select=0;
  }

  addReservacion(form?: NgForm) {
    //console.log(form.value);
    if(form.value._id) {
      this.reservacionService.putReservacion(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getReservaciones();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.reservacionService.postReservacion(form.value)
      .subscribe(res => {
        this.getReservaciones();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getReservaciones() {
    this.reservacionService.getReservaciones()
      .subscribe(res => {
        this.reservacionService.reservaciones = res as Reservacion[];
      });
  }

  editReservacion(reservacion: Reservacion) {
    this.reservacionService.selectedReservacion = reservacion;
  }

  deleteReservacion(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.reservacionService.deleteReservacion(_id)
        .subscribe(res => {
          this.getReservaciones();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.reservacionService.selectedReservacion = new Reservacion();
    }
  }
//  getTotalAmount() {
 //   return this.reservacionService.reservaciones.map(i => i.NumHab).reduce((acc, value) => ñacc + value, 0);
 // }
}

