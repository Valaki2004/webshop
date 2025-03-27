import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { CardService } from '../card.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-savanyu-uditok',
  templateUrl: './savanyu-uditok.component.html',
  styleUrl: './savanyu-uditok.component.css'
})
export class SavanyuUditokComponent {
 savanyuuditok:any
 user: any = null;
  constructor(private base:BaseService,private cart:CardService,private auth:AuthService){}
  ngOnInit():void{
    this.auth.getCurrentUser().subscribe(user => {
      this.user = user;
    });
    this.getSavanyuUditok()
  }

  getSavanyuUditok(){
    this.base.getvalamiUditok().subscribe((res)=>
      this.savanyuuditok=res
  )
  }
  addStuff(element: any, db: number): void {
    this.cart.addElement(element, db);
  }
}
