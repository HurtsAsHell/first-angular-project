import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: '../home.component.html',
  styleUrls: ['../styles/home.component.css']
})
export class HomeComponent implements OnInit {
  username:string = 'Sconosciuto!!!!!'
  constructor(private Login:LoginService) { }

  ngOnInit(): void {
      this.username = this.Login.getUsername()
  }


}
