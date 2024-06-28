import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../../../core/services/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products: ProductType[] = [];
  subscription: Subscription | null = null;

  constructor(private http: HttpClient,
              private productsService: ProductsService,
              private route: Router) {
  }


  ngOnInit() {
    this.subscription = this.productsService.getProducts()
      .subscribe({
        next: data => {
          this.products = data;
        },
        error: err => {
          console.log(err);
          this.route.navigate(['/'])
        }
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

}
