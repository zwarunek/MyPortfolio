import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from "primeng/button";
import { HeaderComponent } from './header/header.component';
import {MegaMenuModule} from "primeng/megamenu";
import {FormsModule} from "@angular/forms";
import {MenuModule} from "primeng/menu";
import {A11yModule} from "@angular/cdk/a11y";
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from "@angular/forms";
import { FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule} from "@angular/common/http";
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from 'primeng/dialog';
import {MenubarModule} from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import {TabMenuModule} from "primeng/tabmenu";
import {CaptchaModule} from 'primeng/captcha';
import {WebRequestService} from "./web-request.service";
import {CardModule} from 'primeng/card';
import { TimemachineComponent } from './projects/timemachine/timemachine.component';
import { FordsearchengineComponent } from './projects/fordsearchengine/fordsearchengine.component';
import { FooterComponent } from './footer/footer.component';
import { FlappybirdComponent } from './projects/flappybird/flappybird.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectsComponent,
    ContactComponent,
    TimemachineComponent,
    FordsearchengineComponent,
    FooterComponent,
    FlappybirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MegaMenuModule,
    FormsModule,
    MenuModule,
    A11yModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpClientModule,
    InputMaskModule,
    InputTextModule,
    InputTextareaModule,
    RippleModule,
    DialogModule,
    MenubarModule,
    SharedModule,
    TabMenuModule,
    CaptchaModule,
    CardModule
  ],
  providers: [
    WebRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
