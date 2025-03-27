import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { CardService } from '../card.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-chipsek',
  templateUrl: './chipsek.component.html',
  styleUrl: './chipsek.component.css'
})
export class ChipsekComponent implements OnInit {

  chipsek:any
  user: any = null;

  constructor(private base:BaseService,private cart:CardService,private auth:AuthService){}

  ngOnInit():void{
    this.auth.getCurrentUser().subscribe(user => {
      this.user = user;
    });
    this.getChipsek()
  }

  getChipsek(){
    this.base.getChipsek().subscribe((res)=>
      this.chipsek=res)
  }
  addStuff(element: any, db: number): void {
    this.cart.addElement(element, db);
  }
}
