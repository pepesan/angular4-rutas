import { Component, OnInit } from '@angular/core';
import {Heroe} from "../heroe";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  submitted: boolean;

  powers: string[] = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model:Heroe;

  heroes: Heroe[];

  constructor() {
    this.heroes=[];
    this.model = new Heroe(18, 'Dr IQ',
      this.powers[0], 'Chuck Overstreet');
    this.heroes.push(this.model);
    this.model=new Heroe(18, 'Dr IQ',
      this.powers[0], 'Chuck Overstreet');
    this.submitted = false;
  }
  onSubmit() {
    this.submitted = true;
    this.heroes.push(this.model);
    this.model=new Heroe(0,"",this.powers[0],"");
  }
  newHero() {
    new Heroe(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  }
  ngOnInit() {
  }

}
