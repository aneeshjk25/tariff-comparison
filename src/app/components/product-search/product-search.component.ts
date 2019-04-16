import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  @Output() onQuery = new EventEmitter<number>();
  query:number;
  constructor() { }
  

  onSubmit(){
    this.onQuery.emit(this.query);
  }

}
