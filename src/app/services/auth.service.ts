import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }

  helpers = new JwtHelperService;
  baseUrl = environment.api_url;

  // fonction de connexion
  login(email:string, password:string) {
    return this.http.post(this.baseUrl +'/login',{
      email, password
    })
    .pipe(
      map ((response:any)=> {
        const tokenDecode = this.helpers.decodeToken(response.token);
        console.log(tokenDecode);

      //stockage de token d'un users dans le localStorage!!!
        localStorage.setItem('token', response.token);
        localStorage.setItem('role',tokenDecode['roles']);

        
      //la redirection à partir des roles
        if (localStorage.getItem('role') ==='ROLE_ADMIN') {
          console.log(localStorage.getItem('role'));
            this.router.navigate(['/admin']);
        } 
        else if (localStorage.getItem('role') ==='ROLE_FORMATEUR'){
            this.router.navigate(['/formateur']);
        } 
        else if (localStorage.getItem('role') ==='ROLE_CM'){
            this.router.navigate(['/cm']);
        } 
        else if (localStorage.getItem('role') ==='ROLE_APPRENANT'){
            this.router.navigate(['/apprenant']);
        } 
        else {
            console.log('veuillez reverifier vos données!!!')
        }

      
      }) 
    )

  }


  //la recuperation du token stocké dans le localStorage!!!
  getToken() {
    const token = localStorage.getItem('token');
    if (token!= 'undifined') {
      return token;
    } 
    else {
      return null;
    }
  }
}
