import { Component, OnInit } from '@angular/core';
import {Resultado} from "../resultado"
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  resultados: any;
  url: string;

  constructor(private http: Http) {
    this.url="http://cursosdedesarrollo.com/pactometro/resultados.json";
    this.loadData().subscribe(data =>
      this.resultados =data
    )
  }
  private loadData(): Observable<[Resultado]>{
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  ngOnInit() {
  }

}
