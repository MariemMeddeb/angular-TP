import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  product!: Product;
  titleInvalid = false;
  titleTouched = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.product = new Product();
  }

  validateTitle() {
    const title = this.product.title;
    if (title.length < 3 || !/^[A-Z]/.test(title)) {
      this.titleInvalid = true;
    } else {
      this.titleInvalid = false;
    }
    this.titleTouched = true;
  }

  isFormValid(): boolean {
    if (!this.product.id || this.product.id.trim() === '' ||
      !this.product.title || this.product.title.trim() === '' ||
      !this.product.quantity || this.product.quantity.trim() === '') {
      return false;
    }
   
    return true; 
  }

  
  submit() {
    console.log(this.product);
  }

}
