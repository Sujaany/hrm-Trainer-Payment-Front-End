import { Component, OnInit } from '@angular/core';
import { AddPayment } from 'src/app/Model/add-payment';
import { AddPaymentService } from 'src/app/Service/add-payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  constructor(private paymentService:AddPaymentService) { }
  paymentObj:AddPayment = new AddPayment()
  payment:AddPayment[]
  ngOnInit() {
    this.getAllPaymentDetails()
  }
  addpaymentdetails(){
    return this.paymentService.addPaymentDetails(this.paymentObj).subscribe(data=>{
      console.log(data);
      // alert("sadsfdb")
    })
  }
  getAllPaymentDetails(){
    return this.paymentService.getPayment().subscribe(data=>{
      this.payment=data;
    })
  }

}
