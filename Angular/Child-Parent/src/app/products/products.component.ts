import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  products={}
  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/products')
    .subscribe(response=>this.products=response);
  }



}
