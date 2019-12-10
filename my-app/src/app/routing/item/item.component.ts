import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
id : number;
price:string;
product:string;
subR : Subscription;
subQ : Subscription;
  constructor(private activeRoute:ActivatedRoute) {
    // this.id = activeRoute.snapshot.params['id']
    this.subR = activeRoute.params.subscribe(params => this.id = params['id']);
    this.subQ = activeRoute.queryParams.subscribe((queryParam)=>{this.product = queryParam['product']; this.price = queryParam['price'];});
  
  }

  ngOnInit() {
  }

}
