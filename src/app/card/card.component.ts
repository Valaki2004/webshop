import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  card: any = [];

  constructor(private router: Router, private crd: CardService) {}

  backbtn() {
    this.router.navigate(["/osszestermek"]);
  }

  continuebtn() {
    this.router.navigate(["/order"]);
  }

  ngOnInit(): void {
    this.subscription = this.crd.getCart().subscribe(
      (res) => this.card = res || []
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  price(element: any): number {
    return Number(element.db) * Number(element.ar);
  }

  getTotalPrice(): number {
    return this.card.reduce((total: number, item: any) => total + this.price(item), 0);
  }

  deleteItem(item: any): void {
    this.crd.deleteItem(item);
  }
}
