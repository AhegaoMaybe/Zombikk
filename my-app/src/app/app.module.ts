import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: "", component: MainComponent },
  {path: "login", component: LoginComponent },
  {path: "main", component: MainComponent },
  {path: "about", component: AboutComponent },
  {path: "**", component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MainComponent,
    AboutComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
