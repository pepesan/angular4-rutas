import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  pulsado:boolean;
  values:string;
  values2:string;
  constructor() {
    this.pulsado=false;
  }
  clicked(event) {
    event.preventDefault();
    console.log(event);
    console.log("pulsado");
    this.pulsado=true;
  }
  limpia(event) {
    event.preventDefault();
    this.values="";
    this.values2=""
  }
  onChange(event: any) { // without type info
    this.values2 += event.target.value + ' | ';
  }
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
  ngOnInit() {
  }

}
