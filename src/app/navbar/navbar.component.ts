import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user: any = null;

  constructor(private auth:AuthService,private router:Router){
    
  }
  ngOnInit() {
    this.auth.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }
    Logout(){
      this.auth.logout();
      this.router.navigate(['/login'])
    }
    
}
