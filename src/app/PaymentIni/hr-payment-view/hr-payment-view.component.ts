import { Component, OnInit } from '@angular/core';
import { AddTrainingSchedule } from 'src/app/Model/add-training-schedule';
import { AddTrainingScheduleService } from 'src/app/Service/add-training-schedule.service';

@Component({
  selector: 'app-hr-payment-view',
  templateUrl: './hr-payment-view.component.html',
  styleUrls: ['./hr-payment-view.component.css']
})
export class HrPaymentViewComponent implements OnInit {

  constructor(private trainingScheduleService:AddTrainingScheduleService) { }
  trainingSchedule:AddTrainingSchedule[]
  trainingScheduleObj:AddTrainingSchedule = new AddTrainingSchedule()
  ngOnInit() {
    this.gettrainingSchedule()
    
  }
  gettrainingSchedule(){
    return this.trainingScheduleService.gettrainingSchedule().subscribe(data=>{
      this.trainingSchedule=data
      console.log(data);
    })
  }
  paymentProcess(data){
    this.trainingScheduleObj=Object.assign({},data)
    this.trainingScheduleObj.trainer=1
    this.trainingScheduleObj.date = new Date(this.trainingScheduleObj.date);
    return this.trainingScheduleService.addPaymentProcess(this.trainingScheduleObj).subscribe(data=>{
      console.log(data);
      this.gettrainingSchedule()
      // alert("h")
    })
  }

  getId(data){
    this.trainingScheduleObj=Object.assign({},data)
    // alert(this.trainingScheduleObj.id)
    // this.paymentProcess();
  }

}

