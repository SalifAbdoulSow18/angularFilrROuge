import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewComponentComponent } from './new-component/new-component.component';
import { AdminComponent } from './admin/admin.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { FormateurComponent } from './formateur/formateur.component';
import { CmComponent } from './cm/cm.component';
import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';
import { ListeProfilsComponent } from './profilsGerer/liste-profils/liste-profils.component';
import { AjouterProfilsComponent } from './profilsGerer/ajouter-profils/ajouter-profils.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import {VerificationGuard} from './verification.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewComponentComponent,
    AdminComponent,
    ApprenantComponent,
    FormateurComponent,
    CmComponent,
    ListeProfilsComponent,
    AjouterProfilsComponent,
    ListeUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    VerificationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorInterceptor,
      multi: true,

    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
