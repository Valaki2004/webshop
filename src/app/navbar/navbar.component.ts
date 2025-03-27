import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user: any = null;
  cartCount: number = 0;

  constructor(private auth:AuthService,private router:Router, private cart:CardService){
    
  }
  ngOnInit() {
    this.auth.getCurrentUser().subscribe(user => {
      this.user = user;
    });
    this.cart.getCart().subscribe((cart: any) => {
      this.cartCount = cart.length;
    });

  }
    Logout(){
      this.auth.logout();
      this.router.navigate(['/login'])
    }
    viewCart(): void {
      this.router.navigate(['/card']);
    }
  
    
}
