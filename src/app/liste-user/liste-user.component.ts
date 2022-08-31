import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

export interface UserData {
  id: number ;
  phone: string ;
  email: string ;
  nom: string ;
  prenom: string ;
  profil: string ;
  status: boolean ;
}
@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'phone', 'profil', 'status'];
  users: any ;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data ;
    }) ;
  }

}
