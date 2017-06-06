import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;


  constructor(public afAuth: AngularFireAuth,private router:Router) {
    this.user = afAuth.authState;
  }

  createUser(email:string, password:string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,
      password)
  }
  loginUser(email,password){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  loginGoogle() {
    console.log("logingin");
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    console.log("logingout");
    this.afAuth.auth.signOut();
  }

}
