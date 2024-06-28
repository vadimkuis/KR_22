import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {SendOrderService} from "../../core/services/send-order.service";
import {CustomValidators} from "../../shared/validators/custom-validators";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  orderForm = this.fb.group({
    name: ['', [Validators.required, CustomValidators.formNameValidator]],
    lastName: ['', [Validators.required, CustomValidators.formNameValidator]],
    phone: ['', [Validators.required, CustomValidators.formPhoneValidator]],
    country: ['', Validators.required],
    zip: ['', [Validators.required, CustomValidators.formZipValidator]],
    address: ['', [Validators.required, CustomValidators.formAddressValidator]],
    product: [''],
    comment: [''],
  });

  thanks: boolean = false;
  noThanks: boolean = false;
  noValid: boolean = false;
  subscription1: Subscription | null = null;
  subscription2: Subscription | null = null;

  constructor(private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private sendOrder: SendOrderService) {

  }

  ngOnInit() {
    this.subscription1 = this.activatedRoute
      .queryParams
      .subscribe(
        {
          next: params => {
            params['product'] ? this.orderForm.get('product')?.setValue(params['product']) : this.router.navigate(['/'])
          }
        }
    )
  }

  ngOnDestroy() {
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
  }

  sendProductOrder() {
    if (this.orderForm.valid) {
      this.subscription2 = this.sendOrder.sendOrder({
        name: this.orderForm.value.name!,
        last_name: this.orderForm.value.lastName!,
        phone: this.orderForm.value.phone!.toString(),
        country: this.orderForm.value.country!,
        zip: +this.orderForm.value.zip!,
        product: this.orderForm.value.product!,
        address: this.orderForm.value.address!,
        comment: this.orderForm.value.comment
      })
        .subscribe({
          next: value => {
            if (value.success === 1 && !value.message) {
              this.thanks = true;
              this.noThanks = false;
            }
            if (value.success === 0 && value.message) {
              this.thanks = false;
              this.noThanks = true;
            }
          }
        })
    } else {
      this.noValid = true
    }
  }
}
