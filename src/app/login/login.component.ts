import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Projet Fil Rouge Sonatel Academy';
  hide = true;
  email = '';
  password = '';
  formLogin: any = FormGroup;
  submitted = false;
  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    }) ;
  }

    get f(){
      return this.formLogin.controls
    }

  // tslint:disable-next-line:typedef
    onSubmit(){
      this.authService.login(this.email, this.password).subscribe(data => {
        console.log(data) ;
      },
        err => console.log(err)) ;
    }

}
