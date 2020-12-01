import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login-component/login.component'
import {ResponderQuestoesComponent} from './responder-questoes/responder-questoes.component'

const routes: Routes = [
    { path: 'login/admin', component: LoginComponent },
    { path: 'responder/:questao_id', component: ResponderQuestoesComponent},
    {path: 'admin', loadChildren: () => import('./principal/principal.module').then(mod => mod.PrincipalModule), },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login/admin',
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
