import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
/*
CARGA PEREZOSA carga componentes de a poco, a medida que sea requerido por usuario
Y PROMESA (then)
path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) },
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
