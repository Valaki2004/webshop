import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { CardService } from '../card.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-uditok',
  templateUrl: './uditok.component.html',
  styleUrl: './uditok.component.css'
})
export class UditokComponent {
 uditok:any
 user: any = null;
  constructor(private base:BaseService,private cart:CardService,private auth:AuthService){}
  ngOnInit():void{
    this.auth.getCurrentUser().subscribe(user => {
      this.user = user;
    });
    this.getUditok()
  }

  getUditok(){
    this.base.getUditok().subscribe((res)=>
      this.uditok=res)
  }
  addStuff(element: any, db: number): void {
    this.cart.addElement(element, db);
  }
}


