import { Component, EventEmitter} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {AddpostdialogComponent} from '../../app/addpostdialog/addpostdialog.component';
import {MatDialog} from '@angular/material';
import   {DataService} from '../data/data.service';
import {Post} from  '../models/Post';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  constructor(public auth: AuthService, public dialog: MatDialog , public data: DataService) {
    auth.handleAuthentication();
   }

   displayedColumns = ['position', 'title', 'category', 'date_posted'];
   dataSource = this.data.getData();

   openDialog(): void {
    let dialogRef = this.dialog.open(AddpostdialogComponent, {
      width: '600px', 
      data: 'Add Post'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  
   
  }