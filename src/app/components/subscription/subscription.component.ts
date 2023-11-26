import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  
  subscriptions: Array<any>;
  constructor(private subscriptionService: SubscriptionService) { 
    this.subscriptions = [];
    this.getSubscriptions();
  }

  ngOnInit(): void {
  }
  
  getSubscriptions(){

    this.subscriptionService.getSubscription().subscribe(
      {
        next: (res: any) => {
          this.subscriptions = res;

          console.log(res);
          
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }

  paymentSubscription(subscriptionPaymentId: any){
      console.log(subscriptionPaymentId);

      this.subscriptionService.paymentSubscription(subscriptionPaymentId).subscribe(
        {
          next: (res: any) => {
            console.log(res);
            window.open(res.url, 'paymentStripe');
          },
          error: (error: any) => {
            console.log(error);
            
          }
        }
      );
  }
}
