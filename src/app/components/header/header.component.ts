import { Component, OnInit } from '@angular/core';
import { IProduct } from './../../product';
import { MessengerService } from './../../service/messenger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: IProduct[];
  prices: IProduct[];
  xyz = 0;

  constructor(
    private msg : MessengerService 
  ) { }

  ngOnInit(): void {
    this.items = this.msg.getItems();
    this.xyz = this.msg.getVal();
    console.log(this.xyz);
  }
  
  GetVal(){
    this.xyz = this.msg.getVal();
  }

  

}
