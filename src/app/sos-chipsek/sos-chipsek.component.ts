import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-sos-chipsek',
  templateUrl: './sos-chipsek.component.html',
  styleUrl: './sos-chipsek.component.css'
})
export class SosChipsekComponent {
soschipsek:any
  constructor(private base:BaseService){}
  ngOnInit():void{
    this.getChipsek()
  }

  getChipsek(){
    this.base.getSosChipsek().subscribe((res)=>
      this.soschipsek=res)
  }
}
