import { Injectable } from '@angular/core';
import {MiClase} from "./mi-clase";

@Injectable()
export class DatosService {
  getDatos: Function;
  datos:MiClase[];

  constructor() {
    this.datos=[new MiClase()];
    this.getDatos=function () {
      return this.datos;
    };
  }


}
