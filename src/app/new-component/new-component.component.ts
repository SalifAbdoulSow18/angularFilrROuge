import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  deconnexion() {
    const val = this.authService.logout() ;
    this.router.navigate(['']) ;
  }
}
