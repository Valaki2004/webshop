import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: any = null;
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private auth:AuthService,private router:Router){}

  ngOnInit() {
    this.auth.getCurrentUser().subscribe(user => {
      this.user = user;
    });}

  login(){
    this.auth.login(this.email, this.password)
    .then(res => {
      if (res.success) {
        console.log("Sikeres bejelentkezés!");
        this.router.navigate(['/candies']);
      } else {
        console.error("Hiba történt:", res.message);
        this.loginError = res.message
      }
    })
    .catch(err => {
      console.error("Hiba történt:", err.message);
      this.loginError = 'Az email cím jelszó páros nem megfelelő';
    });
  }
}
