import { Component, OnInit, Input } from '@angular/core';
import { Product} from './../../models/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products:Product[];
  displayedColumns: string[] = [ 'name', 'annual_cost'];
  constructor() { }

  ngOnInit() {
  }

}
