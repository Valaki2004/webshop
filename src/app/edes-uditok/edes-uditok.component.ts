import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-edes-uditok',
  templateUrl: './edes-uditok.component.html',
  styleUrl: './edes-uditok.component.css'
})
export class EdesUditokComponent {
  edesuditok:any
  constructor(private base:BaseService){}
  ngOnInit():void{
    this.getUditok()
  }

  getUditok(){
    this.base.getUditok().subscribe((res)=>
      this.edesuditok=res)
  }
}
