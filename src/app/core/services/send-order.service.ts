import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderType} from "../../../types/order.type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SendOrderService {

  constructor(private http: HttpClient) {
  }

  sendOrder(body: OrderType): Observable<{success: number, message?: string}> {
    return this.http.post<{success: number, message?: string}>('https://testologia.site/order-tea', body)
  }

}
