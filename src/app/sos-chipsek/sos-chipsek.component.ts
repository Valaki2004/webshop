import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { CardService } from '../card.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sos-chipsek',
  templateUrl: './sos-chipsek.component.html',
  styleUrl: './sos-chipsek.component.css'
})
export class SosChipsekComponent {
soschipsek:any
user: any = null;
  constructor(private base:BaseService,private cart:CardService,private auth:AuthService){}
  ngOnInit():void{
    this.auth.getCurrentUser().subscribe(user => {
      this.user = user;
    });
    this.getChipsek()
  }

  getChipsek(){
    this.base.getSosChipsek().subscribe((res)=>
      this.soschipsek=res)
  }
  addStuff(element: any, db: number): void {
    this.cart.addElement(element, db);
  }
}
