import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import {LoginComponent} from './login/login-component/login.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponderQuestoesComponent } from './responder-questoes/responder-questoes.component'


@NgModule({
    declarations: [AppComponent, LoginComponent,  ResponderQuestoesComponent,  ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule ,SweetAlert2Module.forRoot()],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
