import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: '../login.component.html',
  styleUrls: ['../styles/login.component.css']
})

export class LoginComponent implements OnInit {
	users:any[] = [];
	constructor(private http:HttpClient, private router: Router, private loginService: LoginService) { }
	logged:boolean = false

	ngOnInit(): void {
		if (this.logged == true) 
			this.router.navigateByUrl('/home');
		 else 
			this.http.get("http://localhost:3000/users").subscribe((res:any) => {
				this.users = res;
			})
    }

	checkLogin(user:any, psw:any) {
		this.users.forEach(element => {
			var correct = false

			if (element.username == user) 
				if (element.password == psw) 
					correct = true;
					
			this.loginService.setAuthenticated(correct)

			if (correct == true) {
				this.logged = true
				this.loginService.setUsername(user)

				this.router.navigateByUrl('/home');  // open welcome component

			} else {
				alert('Dati inseriti non validi')
			}
			
		});
	}

	isLogged():boolean {
		return this.loginService.getAuthenticated()
	}

  // Costruttore con un parametro di qualsiasi tipologia
  // constructor(a:any) {

  // }
}