import { IProduct } from './../../product';
import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  products : IProduct[] = [];

  constructor(
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data=>{
      this.products = data;
    })

  }

}
