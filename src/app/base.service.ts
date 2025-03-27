import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  chipsekURL="https://candyshop-67a32-default-rtdb.europe-west1.firebasedatabase.app/chipsek"
  csiposchipsekURL="https://candyshop-67a32-default-rtdb.europe-west1.firebasedatabase.app/csipos-chipsok"
  gumicukrokURL="https://candyshop-67a32-default-rtdb.europe-west1.firebasedatabase.app/gumicukrok"
  valamiUditokURL="https://candyshop-67a32-default-rtdb.europe-west1.firebasedatabase.app/products"
  savanyugumicukrokURL="https://candyshop-67a32-default-rtdb.europe-west1.firebasedatabase.app/savanyuGumicukrok"
  soschipsekURL="https://candyshop-67a32-default-rtdb.europe-west1.firebasedatabase.app/sosChipsek"
  uditokURL="https://candyshop-67a32-default-rtdb.europe-west1.firebasedatabase.app/uditok"
  constructor(private http:HttpClient) { }

getChipsek(){
  return this.http.get(`${this.chipsekURL}/.json`)
}
getCsiposChipsek(){
  return this.http.get(`${this.csiposchipsekURL}/.json`)
}
getGumicukrok(){
  return this.http.get(`${this.gumicukrokURL}/.json`)
}
getSavanyuGumiCukrok(){
  return this.http.get(`${this.savanyugumicukrokURL}/.json`)
}
getSosChipsek(){
  return this.http.get(`${this.soschipsekURL}/.json`)
}
getUditok(){
  return this.http.get(`${this.uditokURL}/.json`)
}
getvalamiUditok(){
  return this.http.get(`${this.valamiUditokURL}/.json`)
}

}
