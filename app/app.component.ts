import {Component} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {PassengerI} from './passenger';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {

passengers: PassengerI[] = [{ id:1,fullname:'krati',checkedIn:true}, 
                            { id:2, fullname:'bittu',checkedIn: false}]

subject =new Subject<PassengerI>();  
behavSubject =new BehaviorSubject<PassengerI>({id: 1, fullname: "tom", checkedIn: true});   
 

 
  }
