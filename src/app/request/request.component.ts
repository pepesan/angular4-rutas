import { Component, OnInit } from '@angular/core';
import {Resultado} from "../resultado"
import {ResultadosService} from "../resultados.service"

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  resultados: Resultado[];
  url: string;

  constructor(private resultadosService: ResultadosService) {
    this.url="http://cursosdedesarrollo.com/pactometro/resultados.json";
    this.resultadosService.loadData().subscribe(data =>
      this.resultados =data
    )
  }

  ngOnInit() {
  }

}
