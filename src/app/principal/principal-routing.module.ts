import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminQuestoesComponent } from './admin-questoes/admin-questoes.component';
import { AdminAlternativasComponent } from './admin-alternativas/admin-alternativas.component'
import { QuestoesComponent } from './questoes/questoes.component';

const routes: Routes = [
  { path: 'cadastrar/questao', component: AdminQuestoesComponent },
  { path: 'alternativa/:questao_id', component: AdminAlternativasComponent },
  { path: 'inicio', component: QuestoesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
