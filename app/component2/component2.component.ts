import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  Component2Data: any = '';  
  
  
  constructor(private DataSharing: DataSharingService) {  
    this.DataSharing.SharingData.subscribe((res: any) => {  
      this.Component2Data = res;  
    })  
  }  
  
  onSubmit(data) {  
    this.DataSharing.SharingData.next(data.value);  
  }  

  ngOnInit() {

    this.DataSharing.SharingData.subscribe((res: any) => {  
      this.Component2Data = res;  
    }) 
  }

}