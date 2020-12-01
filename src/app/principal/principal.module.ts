import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { QuestoesComponent } from './questoes/questoes.component';
import { AdminQuestoesComponent } from './admin-questoes/admin-questoes.component';
import { AdminAlternativasComponent } from './admin-alternativas/admin-alternativas.component';

import { NavBarComponent } from './navegacao/nav-bar/nav-bar.component';
import { FooterComponent } from './navegacao/footer/footer.component';

import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [AdminQuestoesComponent, AdminAlternativasComponent,NavBarComponent, FooterComponent, QuestoesComponent, SidebarComponent,HomeComponent ],
  imports: [
    PrincipalRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ]
})
export class PrincipalModule { }
