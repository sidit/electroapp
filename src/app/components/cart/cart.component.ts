import { IProduct } from './../../product';
import { MessengerService } from './../../service/messenger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  items: IProduct[];
  xyz= 0;

  constructor(
    private msg : MessengerService 
  ) { }

  ngOnInit() {
    this.items = this.msg.getItems();
    console.log(this.items);
    console.log(this.items.length);
    this.xyz = this.msg.getVal();
    console.log(this.xyz);
    
  }
    
  

}
