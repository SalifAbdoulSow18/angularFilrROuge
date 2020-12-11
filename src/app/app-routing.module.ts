import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewComponentComponent } from './new-component/new-component.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'acceuil', component:NewComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
