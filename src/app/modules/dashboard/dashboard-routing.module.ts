import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [{
  path: 'main',
  component: MainDashboardComponent
},
{
  path: '',
  redirectTo: 'main',
  pathMatch: 'full'

}];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
