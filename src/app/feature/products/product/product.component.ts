import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../../../core/services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription, switchMap} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  product: ProductType;
  subscription: Subscription | null = null;

  constructor(private http: HttpClient,
              private productsService: ProductsService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.product = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title: ''
    }
  }

  ngOnInit() {
   this.subscription = this.activatedRoute.params
      .pipe(
        switchMap(params => this.productsService.getProduct(+params['id']))
      )
      .subscribe(
        {
          next: data => data ? this.product = data : {},
          error: err => {
            console.log(err);
            this.route.navigate(['/'])
          }
        }
      )
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  addToOrder(title: string): void {
    this.route.navigate([`/order`],{queryParams: {product: title}})
  }
}
