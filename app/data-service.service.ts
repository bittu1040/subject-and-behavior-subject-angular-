import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';  

@Injectable()
export class DataSharingService {
  subject = new Subject<any>();
  SharingData = new Subject(); 
  constructor() { }
 

  sendMessage(message: string) {
    this.subject.next({ text: message });
}


clearMessages() {
    this.subject.next();
}
}
