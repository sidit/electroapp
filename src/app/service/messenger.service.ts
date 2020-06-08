import { Injectable } from '@angular/core';
import { Observable ,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  items = [];
  item = 0;
  

  constructor() { }

  // 1st Method for sending and recieving the product
  addToCart(product: string){
    this.items.push(product);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }


  // 2nd
  calVal(val){
    this.item  += val;
    console.log(this.item);
  }

  getVal(){
    return this.item;
    console.log(this.item);
  }

}
