import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-csipos-chipsek',
  templateUrl: './csipos-chipsek.component.html',
  styleUrl: './csipos-chipsek.component.css'
})
export class CsiposChipsekComponent {
  csiposchipsek:any
  constructor(private base:BaseService){}
  ngOnInit():void{
    this.getChipsek()
  }

  getChipsek(){
    this.base.getCsiposChipsek().subscribe((res)=>
      this.csiposchipsek=res)
  }
}
