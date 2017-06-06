import { Component, OnInit } from '@angular/core';
import {AuthService} from "../providers/auth.service";
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {
  user: Observable<firebase.User>;
  constructor(public authService: AuthService) {
    this.user=this.authService.user;
  }

  ngOnInit() {
  }

}
