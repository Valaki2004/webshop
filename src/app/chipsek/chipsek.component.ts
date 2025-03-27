import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-chipsek',
  templateUrl: './chipsek.component.html',
  styleUrl: './chipsek.component.css'
})
export class ChipsekComponent implements OnInit {

  chipsek:any

  constructor(private base:BaseService){}

  ngOnInit():void{
    this.getChipsek()
  }

  getChipsek(){
    this.base.getChipsek().subscribe((res)=>
      this.chipsek=res)
  }
}
