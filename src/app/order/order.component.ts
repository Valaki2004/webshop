import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Router } from '@angular/router';

interface Order {
  name: string;
  address: string;
  comment: string;
  phone: string;
  email: string;
  paymentMethod: string;
  cart: any[];
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  name: string = '';
  address: string = '';
  comment: string = '';
  phone: string = '';
  email: string = '';
  paymentMethod: string = 'készpénz';
  paymentOptions: string[] = ['készpénz'];
  cart: any[] = [];
  feedbackMessage: string = '';

  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit(): void {
    console.log('Navigáltam a /order oldalra');
    this.cardService.getCart().subscribe(cartData => {
      this.cart = cartData;
    });
  }

  addOrder(): void {
    if (!this.validateInputs()) {
      return;
    }

    const orderData: Order = {
      name: this.name,
      address: this.address,
      comment: this.comment,
      phone: this.phone,
      email: this.email,
      paymentMethod: this.paymentMethod,
      cart: this.cart
    };

    this.cardService.addOrder(orderData).subscribe(
      (response) => {
        this.feedbackMessage = 'A rendelés sikeresen leadva! Egy hitelesítő emailt küldtünk a megadott címre.';
        this.resetForm();
        this.cardService.clearCart();
        this.router.navigate(['candies']);
        this.sendVerificationEmail(this.email);
      },
      (error) => {
        this.feedbackMessage = 'Hiba történt a rendelés leadása közben.';
      }
    );
  }



  private validateInputs(): boolean {
    const namePattern = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\s]+$/;
    if (!namePattern.test(this.name)) {
      this.feedbackMessage = 'A név érvénytelen! Csak betűk, szóközök és ékezetes karakterek engedélyezettek, számok nem.';
      return false;
    }
    return (
      this.isNotEmpty(this.name) &&
      this.isNotEmpty(this.address) &&
      this.isNotEmpty(this.phone) &&
      this.isNotEmpty(this.email) &&
      this.validateEmail(this.email)
    );
  

    return true;
  }

  private isNotEmpty(value: string): boolean {
    return value.trim().length > 0;
  }

  private validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  private sendVerificationEmail(email: string): void {
    console.log('Hitelesítő email küldése a következő címre:', email);
  }

  private resetForm(): void {
    this.name = '';
    this.address = '';
    this.comment = '';
    this.phone = '';
    this.email = '';
    this.paymentMethod = 'cash';
    this.cart = [];
    this.feedbackMessage = '';
  }

}