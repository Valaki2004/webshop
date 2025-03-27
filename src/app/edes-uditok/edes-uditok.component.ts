import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { CardComponent } from '../card/card.component';
import { CardService } from '../card.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edes-uditok',
  templateUrl: './edes-uditok.component.html',
  styleUrl: './edes-uditok.component.css'
})
export class EdesUditokComponent {
  edesuditok:any
  user: any = null;
  constructor(private base:BaseService,private cart:CardService,private auth:AuthService){}
  ngOnInit():void{
    this.auth.getCurrentUser().subscribe(user => {
      this.user = user;
    });
    this.getUditok()
  }

  getUditok(){
    this.base.getUditok().subscribe((res)=>
      this.edesuditok=res)
  }
  addStuff(element: any, db: number): void {
    this.cart.addElement(element, db);
  }
}
