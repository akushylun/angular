import {MainComponent} from './main/main.component';
import {MoreInfoComponent} from './more-info/more-info.component';
import {ProductComponent} from './product/product.component';
import {Component, OnInit} from '@angular/core';
import {Routes, Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  }

  goToProduct(id: string): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }

}

