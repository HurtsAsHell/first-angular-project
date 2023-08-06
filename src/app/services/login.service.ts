import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    authenticated:boolean = false
    username:string = 'Sconosciutoo!!'

    @Output()
	  LoginServiceEmitter = new EventEmitter()

    constructor() { }

    setAuthenticated(val:boolean) {
        this.authenticated = val 
    }

    getAuthenticated() :boolean {
        return this.authenticated
    }

    setUsername(username:string) {
      this.username = username
    }

    getUsername() :string {
      return this.username
    }

  // addToCart(username:String, private password:String) {
  //   this.items.push(product);
  // }
}
