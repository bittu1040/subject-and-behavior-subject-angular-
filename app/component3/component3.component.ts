import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-service.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  Component3Data: any = '';  
  
  constructor(private DataSharing: DataSharingService) {  
    this.DataSharing.SharingData.subscribe((res: any) => {  
      this.Component3Data = res;  
    })  
  }  
  
  onSubmit(data) {  
    this.DataSharing.SharingData.next(data.value);  
  }  
  ngOnInit() {
    this.DataSharing.SharingData.subscribe((res: any) => {  
      this.Component3Data = res;  
    })  
  }

}