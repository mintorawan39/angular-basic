import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'book-detail',
  component: BookDetailComponent
},
{
  path: 'book',
  component: BookListComponent
},
{
  path: 'dashboard',
  loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) // โหลด module ลูก
},
{
  path: '',
  redirectTo: 'book',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: 'book'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
