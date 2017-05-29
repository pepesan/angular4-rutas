import { Component, OnInit } from '@angular/core';
import { MiClase } from 'app/mi-clase';
import {DatosService} from "../datos.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datos: MiClase[];
  titulo: string;
  objeto: MiClase;
  heroes : [string];
  presente: boolean;
  cambia: Function;
  fecha: Date;
  constructor(private servicio: DatosService) {
    this.titulo="Mí título";
    this.objeto=new MiClase();
    this.objeto.titulo="Otro título";
    this.heroes=['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.presente=false;
    this.cambia=function (event) {
      this.presente=!(this.presente);
      //console.log(this.presente);
    };
    this.servicio=new DatosService();
    this.datos=servicio.getDatos();
    this.fecha= new Date(1978, 5, 30); // June 30, 1978
    //console.log(this.objeto);


  }

  ngOnInit() {
  }

}
