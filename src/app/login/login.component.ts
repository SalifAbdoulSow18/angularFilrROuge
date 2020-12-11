import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Projet Fil Rouge Sonatel Academy';
  hide = true;
  constructor() { }

  ngOnInit(): void {}
    direBonjour(){
      console.log("Bonjour");
    }

}
