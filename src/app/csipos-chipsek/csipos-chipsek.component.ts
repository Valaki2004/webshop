import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { CardService } from '../card.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-csipos-chipsek',
  templateUrl: './csipos-chipsek.component.html',
  styleUrl: './csipos-chipsek.component.css'
})
export class CsiposChipsekComponent {
  csiposchipsek:any
  user: any = null;
  constructor(private base:BaseService,private cart:CardService,private auth:AuthService){}
  ngOnInit():void{
    this.auth.getCurrentUser().subscribe(user => {
      this.user = user;
    });
    this.getChipsek()
  }

  getChipsek(){
    this.base.getCsiposChipsek().subscribe((res)=>
      this.csiposchipsek=res)
  }
  addStuff(element: any, db: number): void {
    this.cart.addElement(element, db);
  }
}
