import { Component, OnInit } from '@angular/core';
import { MiClase } from 'app/mi-clase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo: string;
  objeto: MiClase
  constructor() {
    this.titulo="Mí título"
    this.objeto.titulo="Otro título"
  }

  ngOnInit() {
  }

}
