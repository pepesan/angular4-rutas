import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,
  FirebaseObjectObservable } from 'angularfire2/database';
import {Dato} from "../dato"
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  db: AngularFireDatabase;

  value: string;
  items: FirebaseListObservable<Dato[]>;

  undato:FirebaseObjectObservable<Dato>;
  clave: string;

  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.cogeItems();
  }


  ngOnInit() {
  }

  cogeItems(){
    this.items = this.db.list('/elements', {
      query: {
        // limitToLast: 10,
        orderByKey: true
      }
    });
  }

  muestra(){
    this.undato=this.db.object("/elements/-KlZcCbMStq_2L-3URca");
  }
  cambia(){
    this.undato.update({value:"otro valor"});
  }

  addEntry() {
    const itemObservable = this.db.list('/elements/');
    itemObservable.push({value:this.value});

    this.value = '';
  }

  delete(object) {
    const itemObservable = this.db.list('/elements/');
    itemObservable.remove(object.$key);
  }

}
