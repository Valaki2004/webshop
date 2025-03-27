import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-candies',
  templateUrl: './candies.component.html',
  styleUrl: './candies.component.css'
})
export class CandiesComponent {
  candies:any

  constructor(private base:BaseService){}

  ngOnInit():void{
    this.getCandies()
  }

  getCandies(){
    this.base.getGumicukrok().subscribe((res)=>
      this.candies=res)
  }
}
