import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import {DatosService} from "./datos.service";
import {ResultadosService} from "./resultados.service";
import { RequestComponent } from './request/request.component';
import { EventosComponent } from './eventos/eventos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FirebaseComponent } from './firebase/firebase.component';
const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'request', component: RequestComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'formulario', component: FormularioComponent},
  { path: 'firebase', component: FirebaseComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 // { path: 'manage-book', component: ManageBookComponent },
 // { path: 'update-book/:id', component: UpdateBookComponent },
 // { path: '', redirectTo: '/manage-book ', pathMatch: 'full' },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent,
    RequestComponent,
    EventosComponent,
    FormularioComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [DatosService, ResultadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
