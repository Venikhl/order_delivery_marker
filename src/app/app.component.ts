import { Component } from '@angular/core';
import { RefillableMarker } from './entities/Marker';
import { Order } from './entities/Order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'order_delivery'; 
  public orders: Order[] = [];

  
  public Add(date:string, product: string) {
    this.orders.push(new Order(new Date(date), product));
  }

  public ngOnInit(){
    let marker = new RefillableMarker('yellow');
    marker.print("Testing refillable marker");
    console.log("Ink amount - 1: " + marker.ink_amount);
    marker.refill();
    console.log("Ink amount - 2: " + marker.ink_amount);

  }
}