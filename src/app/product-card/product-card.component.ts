import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() Prod:Product={    
    id:0,
    title:"",
    price:null,
    quantity:null,
    like:null}

  @Input() MaxPrix:number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
