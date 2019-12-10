import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';


const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "about", component: AboutComponent },
  {path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
