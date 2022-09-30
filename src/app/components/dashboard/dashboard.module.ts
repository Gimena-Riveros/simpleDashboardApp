import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedAngularModule } from '../shared-angular/shared-angular.module';
import { DashboardComponent } from './dashboard.component';
import { InitialComponent } from './initial/initial.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InitialComponent,
    NavbarComponent,
    UsersComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedAngularModule
  ]
})
export class DashboardModule { }
