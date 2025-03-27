import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { CardService } from '../card.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-gumicukrok',
  templateUrl: './gumicukrok.component.html',
  styleUrl: './gumicukrok.component.css'
})
export class GumicukrokComponent {
  gumicukrok:any
  user: any = null;
  constructor(private base:BaseService,private cart:CardService,private auth:AuthService){}
  ngOnInit():void{
    this.auth.getCurrentUser().subscribe(user => {
      this.user = user;
    });
    this.getGumicukrok()
  }

  getGumicukrok(){
    this.base.getGumicukrok().subscribe((res)=>
      this.gumicukrok=res)
  }
  addStuff(element: any, db: number): void {
    this.cart.addElement(element, db);
  }
}
