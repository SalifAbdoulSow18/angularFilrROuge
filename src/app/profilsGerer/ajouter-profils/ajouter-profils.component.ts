import { Component, OnInit } from '@angular/core';
import {ProfilsService} from '../../services/profils.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-profils',
  templateUrl: './ajouter-profils.component.html',
  styleUrls: ['./ajouter-profils.component.scss']
})
export class AjouterProfilsComponent implements OnInit {
  registerForm: FormGroup | undefined ;
  submitted = false ;
  constructor(private route: Router, private profilService: ProfilsService, private  formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      libelle: ['', Validators.required]
    }) ;
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() {// @ts-ignore
    return this.registerForm.controls ;
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    // @ts-ignore
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    // @ts-ignore
    alert('SUCCESS!! :-)\n\n' + JSON.stringify( this.registerForm.value, null, 4));
  }

  // tslint:disable-next-line:typedef
  ajoutProfil() {
    // @ts-ignore
    this.profilService.addProfil().subscribe(
      reponse => {
        this.route.navigate(['/accueil']);
      }
    ) ;
  }
}
