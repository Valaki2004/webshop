import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-gumicukrok',
  templateUrl: './gumicukrok.component.html',
  styleUrl: './gumicukrok.component.css'
})
export class GumicukrokComponent {
  gumicukrok:any
  constructor(private base:BaseService){}
  ngOnInit():void{
    this.getGumicukrok()
  }

  getGumicukrok(){
    this.base.getGumicukrok().subscribe((res)=>
      this.gumicukrok=res)
  }
}
