import { Component, OnInit } from '@angular/core';
import { AddTrainingScheduleService } from 'src/app/Service/add-training-schedule.service';
import { AddTrainingSchedule } from 'src/app/Model/add-training-schedule';
import { AddPayment } from 'src/app/Model/add-payment';
import { AddPaymentService } from 'src/app/Service/add-payment.service';

@Component({
  selector: 'app-accountant-payment-view',
  templateUrl: './accountant-payment-view.component.html',
  styleUrls: ['./accountant-payment-view.component.css']
})
export class AccountantPaymentViewComponent implements OnInit {

  constructor(private trainingScheduleService:AddTrainingScheduleService,private paymentService:AddPaymentService) { }
  trainingSchedule:AddTrainingSchedule[]
  trainingScheduleByID:AddTrainingSchedule
  trainingScheduleObj:AddTrainingSchedule = new AddTrainingSchedule()
  paymentObj:AddPayment = new AddPayment()
  ngOnInit() {
    this.getTrainingSchedule()
    
  }
  getTrainingSchedule(){
    return this.trainingScheduleService.gettrainingSchedule().subscribe(data=>{
      this.trainingSchedule=data
      console.log(data);
    })
  }
  addpaymentdetails(){
    this.paymentObj.amount=this.trainingScheduleByID.amountToPaid
    this.paymentObj.dateOfPayment=this.trainingScheduleByID.date
    this.paymentObj.trainingSchedule=this.trainingScheduleByID.id
    return this.paymentService.addPaymentDetails(this.paymentObj).subscribe(data=>{
      console.log(data);
      // alert("sadsfdb")
      this.getTrainingSchedule()
    })
  }
  editPayment(data){
    this.paymentObj.id=this.trainingScheduleObj.id
    this.paymentObj.amount=this.trainingScheduleByID.amountToPaid
    this.paymentObj.dateOfPayment=this.trainingScheduleByID.date
    this.paymentObj.trainingSchedule=this.trainingScheduleByID.id
    return this.paymentService.editPayment(this.paymentObj.id).subscribe(data=>{
      console.log(data);
      // alert("sadsfdb")
      this.getTrainingSchedule()
    })
  }
  getTrainingScheduleById(data){
    this.trainingScheduleObj=Object.assign({},data)
    return this.trainingScheduleService.gettrainingScheduleByTrainer(this.trainingScheduleObj).subscribe(data=>{
      this.trainingScheduleByID=data;
      console.log(data)
      this.getTrainingSchedule()
    })
  }

  // paymentCompleted(data){
  //   this.trainingScheduleObj=Object.assign({},data)
  //   this.trainingScheduleObj.trainer=1
  //   this.trainingScheduleObj.date = new Date(this.trainingScheduleObj.date);
  //   return this.trainingScheduleService.addPaymentComplete().subscribe(data=>{
  //     console.log(data);
  //     this.gettrainingSchedule()
  //     // alert("h")
  //   })
  // }

  getId(data){
    this.trainingScheduleObj=Object.assign({},data)
    alert(this.trainingScheduleObj.id)
    // this.paymentProcess();
  }

}

