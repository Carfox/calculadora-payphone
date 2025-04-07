import { Routes } from '@angular/router';
import { IndexLayoutComponent } from './layout/index/index-layout.component';

export const routes: Routes = [

  {path: '', component: IndexLayoutComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''} // Redirect to home if no route is found,
];
