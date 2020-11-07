import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ContactComponent} from "./contact/contact.component";
import {TimemachineComponent} from "./projects/timemachine/timemachine.component";
import {FordsearchengineComponent} from "./projects/fordsearchengine/fordsearchengine.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'resume', redirectTo: "../assets/Resume Summer 2020.pdf"},
  {path: 'projects/timemachine', component: TimemachineComponent},
  {path: 'projects/fordsearchengine', component: FordsearchengineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
