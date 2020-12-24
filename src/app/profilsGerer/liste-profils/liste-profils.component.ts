import { Component, OnInit } from '@angular/core';
import {ProfilsService} from '../../services/profils.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AjouterProfilsComponent} from '../ajouter-profils/ajouter-profils.component';

export interface UserData {
    id: number ;
    libelle: string ;
    status: boolean ;
  }


@Component({
  selector: 'app-liste-profils',
  templateUrl: './liste-profils.component.html',
  styleUrls: ['./liste-profils.component.scss']
})

  export class ListeProfilsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'libelle', 'status'];
  profils: any ;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private profilService: ProfilsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.profilService.getProfil().subscribe(data => {
      console.log(data);
      this.profils = data ;
    }) ;
  }

  // tslint:disable-next-line:typedef
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AjouterProfilsComponent, dialogConfig);
  }

}
