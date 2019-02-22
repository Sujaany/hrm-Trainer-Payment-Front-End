import { Component, OnInit } from '@angular/core';
import { AddTrainingSchedule } from 'src/app/Model/add-training-schedule';
import { AddTrainingScheduleService } from 'src/app/Service/add-training-schedule.service';


@Component({
  selector: 'app-add-training-schedule',
  templateUrl: './add-training-schedule.component.html',
  styleUrls: ['./add-training-schedule.component.css']
})
export class AddTrainingScheduleComponent implements OnInit {

  constructor(private addtrainingScheduleService:AddTrainingScheduleService) { }
  trainingScheduleObj:AddTrainingSchedule = new AddTrainingSchedule()
  ngOnInit() {
  }
  addtrainingSchedule(){
    alert()
    this.trainingScheduleObj.trainer=1
    // this.trainingScheduleObj.date=new Date(this.trainingScheduleObj.date)
    // this.trainingScheduleObj.amountToPaid=500
    // this.trainingScheduleObj.totalCoveredhours=5.2
    // this.trainingScheduleObj.date=new this.trainingScheduleObj.date
    return this.addtrainingScheduleService.addtrainingSchedule(this.trainingScheduleObj).subscribe(data=>{
      console.log(data);
    })
  }
  
}
