import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { CmComponent } from './cm/cm.component';
import { FormateurComponent } from './formateur/formateur.component';
import { LoginComponent } from './login/login.component';
import { NewComponentComponent } from './new-component/new-component.component';
import {ListeProfilsComponent} from './profilsGerer/liste-profils/liste-profils.component';
import {ListeUserComponent} from './liste-user/liste-user.component';
import {VerificationGuard} from './verification.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'acceuil', component: NewComponentComponent, canActivate: [VerificationGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [VerificationGuard]},
  {path: 'apprenant', component: ApprenantComponent},
  {path: 'formateur', component: FormateurComponent},
  {path: 'cm', component: CmComponent},
  {path: 'listeProfils', component: ListeProfilsComponent},
  {path: 'listeUsers', component: ListeUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
