import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { CardService } from '../card.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-candies',
  templateUrl: './candies.component.html',
  styleUrl: './candies.component.css'
})
export class CandiesComponent {
  candies:any
  user: any = null;
  
  constructor(private base:BaseService,private cart:CardService,private auth:AuthService){}

  ngOnInit():void{
    this.getCandies()
    this.auth.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  getCandies(){
    this.base.getGumicukrok().subscribe((res)=>
      this.candies=res)
  }
  addStuff(element: any, db: number): void {
    this.cart.addElement(element, db);
  }

}
