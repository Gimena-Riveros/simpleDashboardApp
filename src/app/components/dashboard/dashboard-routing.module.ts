import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InitialComponent } from './initial/initial.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component:DashboardComponent, children: [
    { path: '', component: InitialComponent },
    { path: 'users', component: UsersComponent },
    { path: 'reports', component: ReportsComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
