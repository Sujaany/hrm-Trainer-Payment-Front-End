import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/header/header.component';
import { SideBarComponent } from './Core/side-bar/side-bar.component';
import { FooterComponent } from './Core/footer/footer.component';
import { DashBoardComponent } from './Core/dash-board/dash-board.component';
import { AddPaymentComponent } from './PaymentIni/add-payment/add-payment.component';
import { ViewPaymentComponent } from './PaymentIni/view-payment/view-payment.component';
import { AppRoutingModule } from './approuting.module';
import { AccountantPaymentViewComponent } from './PaymentIni/accountant-payment-view/accountant-payment-view.component';
import { HrPaymentViewComponent } from './PaymentIni/hr-payment-view/hr-payment-view.component';
import { AddTrainingScheduleComponent } from './PaymentIni/add-training-schedule/add-training-schedule.component';
import { ViewTrainingScheduleComponent } from './PaymentIni/view-training-schedule/view-training-schedule.component';

@NgModule({
    declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    DashBoardComponent,
    AddPaymentComponent,
    ViewPaymentComponent,
    AccountantPaymentViewComponent,
    HrPaymentViewComponent,
    AddTrainingScheduleComponent,
    ViewTrainingScheduleComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
