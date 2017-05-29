import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import {DatosService} from "./datos.service";
const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 // { path: 'manage-book', component: ManageBookComponent },
 // { path: 'update-book/:id', component: UpdateBookComponent },
 // { path: '', redirectTo: '/manage-book ', pathMatch: 'full' },
 // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
