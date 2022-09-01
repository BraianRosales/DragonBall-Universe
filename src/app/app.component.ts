import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**Con el viewChild buscamos la referencia #sidenav en el template dentro de una etiqueta. */
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';

  /**Metodo de referencia del lado del template que se utiliza para cerrar el sideNav */
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
