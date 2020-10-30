import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from "primeng/button";
import { HeaderComponent } from './header/header.component';
import {TabMenuModule} from "primeng/tabmenu";
import {FormsModule} from "@angular/forms";
import {MenuModule} from "primeng/menu";
import {A11yModule} from "@angular/cdk/a11y";
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    FormsModule,
    MenuModule,
    A11yModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
