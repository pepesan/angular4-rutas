import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "../providers/auth.service"
import * as firebase from 'firebase/app'
import {Router} from "@angular/router"
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: Observable<firebase.User>;
  state: string = '';
  error: any;
  email:string;
  password:string;
  constructor(public authService: AuthService,private router: Router) {
    this.user = authService.user;
  }




  onSubmit(formData){
    if(formData.valid) {
      console.log(formData.value);
      this.authService.createUser(this.email, this.password).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/logged'])
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }
  loginUser(){
    this.authService.loginUser(this.email,this.password).then(
      (success) => {
        console.log(success);
        this.router.navigate(['/logged'])
      }
    ).catch(
      (err) => {
        console.log(err);
        this.error = err;
      });
  }

  loginGoogle(){
    this.authService.loginGoogle();
  }
  logout(){
    this.authService.logout();
  }
  ngOnInit() {
  }

}
