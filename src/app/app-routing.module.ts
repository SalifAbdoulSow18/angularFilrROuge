import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { CmComponent } from './cm/cm.component';
import { FormateurComponent } from './formateur/formateur.component';
import { LoginComponent } from './login/login.component';
import { NewComponentComponent } from './new-component/new-component.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'acceuil', component: NewComponentComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'apprenant', component: ApprenantComponent},
  {path: 'formateur', component: FormateurComponent},
  {path: 'cm', component: CmComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
