import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MainDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule

  ]
})
export class DashboardModule { }
