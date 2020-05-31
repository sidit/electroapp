import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product : any = [] ;
  thumbImages: any = []

  constructor(
      private productservice: ProductService,
      private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.productservice.getProduct(id).subscribe(data=>{
      this.product = data;

      if(this.product.images != null){
        this.thumbImages = this.product.images.split(';');
        console.log(this.thumbImages);
      }

      console.log(this.product);
    })
  }
}