import { IProduct } from './../../product';
import { MessengerService } from './../../service/messenger.service';
import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: IProduct[] = [];
  productItem : IProduct;
  prod : number
  
  constructor(
    private productservice : ProductService,
    private router : Router,
    private msg : MessengerService
    ) { }

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe(data=>{
      this.products = data;
      console.log(this.products);
    })
  }
  selectProduct(id : number){
    this.router.navigate(['/product',id]).then();
  }

  handleAddToCart(product){
    this.msg.addToCart(product);
  }

  calval(prod){
    this.msg.calVal(prod);
  }
}
