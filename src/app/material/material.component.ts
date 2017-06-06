import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  myFilter = (d: Date) => d.getFullYear() > 2005
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 11, 31);
  constructor() { }

  ngOnInit() {
  }

}
