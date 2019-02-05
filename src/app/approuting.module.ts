import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewPaymentComponent } from '../app/PaymentIni/view-payment/view-payment.component'
import { AddPaymentComponent } from '../app/PaymentIni/add-payment/add-payment.component';
import { AddTrainingScheduleComponent } from './PaymentIni/add-training-schedule/add-training-schedule.component';
import { ViewTrainingScheduleComponent } from './PaymentIni/view-training-schedule/view-training-schedule.component';
import { AccountantPaymentViewComponent } from './PaymentIni/accountant-payment-view/accountant-payment-view.component';
import { HrPaymentViewComponent } from './PaymentIni/hr-payment-view/hr-payment-view.component';


const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path :'viewPayment', component: ViewPaymentComponent},
  { path :'addPayment', component: AddPaymentComponent},
  { path: 'accountantPaymentView', component: AccountantPaymentViewComponent },
  { path: 'hrPaymentView', component: HrPaymentViewComponent },
  { path: 'addTrainingSchedule', component: AddTrainingScheduleComponent },
  { path: 'viewTrainingSchedule', component: ViewTrainingScheduleComponent },
];

@NgModule({
  imports: [
    CommonModule,
   RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

