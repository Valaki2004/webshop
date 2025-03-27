import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  displayName:string='';

  constructor(private auth:AuthService){}
  register(){
    this.auth.register(this.email, this.password).catch(err => {
      console.error("Hiba történt!", err);
    });
  }

  registerwithgoogle(){
    this.auth.loginWithGoogle()
  }
}
