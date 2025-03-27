import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-candies',
  templateUrl: './candies.component.html',
  styleUrl: './candies.component.css'
})
export class CandiesComponent {
  candies:any

  constructor(private base:BaseService,private cart:CardService){}

  ngOnInit():void{
    this.getCandies()
  }

  getCandies(){
    this.base.getGumicukrok().subscribe((res)=>
      this.candies=res)
  }
  addStuff(element: any, db: number): void {
    this.cart.addElement(element, db);
  }

}
