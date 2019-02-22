import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AddPayment } from '../Model/add-payment';

const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class AddPaymentService {

  constructor(private httpObj:HttpClient) { }
  private paymentUrl = "http://localhost:8080/trainerpayment/payment";

  getPayment(){
    return this.httpObj.get<AddPayment[]>(this.paymentUrl);
  }
  addPaymentDetails(data){
    return this.httpObj.post<AddPayment>(this.paymentUrl,data)
  }
  getPaymentDetailByTrainingScheduleId(data){
    return this.httpObj.get<AddPayment>(this.paymentUrl+"/"+data)
  }
  editPayment(data){
    return this.httpObj.put<AddPayment>(this.paymentUrl+"/"+data,data)
  }
}
