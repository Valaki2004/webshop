import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-uditok',
  templateUrl: './uditok.component.html',
  styleUrl: './uditok.component.css'
})
export class UditokComponent {
 uditok:any
  constructor(private base:BaseService){}
  ngOnInit():void{
    this.getUditok()
  }

  getUditok(){
    this.base.getUditok().subscribe((res)=>
      this.uditok=res)
  }
}


