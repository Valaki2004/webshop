import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-savanyu-uditok',
  templateUrl: './savanyu-uditok.component.html',
  styleUrl: './savanyu-uditok.component.css'
})
export class SavanyuUditokComponent {
 savanyuuditok:any
  constructor(private base:BaseService){}
  ngOnInit():void{
    this.getSavanyuUditok()
  }

  getSavanyuUditok(){
    this.base.getvalamiUditok().subscribe((res)=>
      this.savanyuuditok=res
  )
  }
}
