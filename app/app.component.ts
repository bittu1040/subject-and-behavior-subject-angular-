import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { from } from 'rxjs/observable/from';
import { PassengerI } from './passenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  passengers: PassengerI[] = [
    { id: 1, fullname: 'krati', checkedIn: true },
    { id: 2, fullname: 'bittu', checkedIn: false },
  ];
  /*
 subject initialise without initial value and behavior subject initialise with initial value.
 step 1: initialize subject 
 step 2: subscribe it 
 step 3: get data by using next and pass value in next,   
 in behavior subject, no mandatory of using next to get data, because it hold initial data, but in subject to get data you need to use next, because it doesnot hold any initial value. 
*/
  subject = new Subject<PassengerI>();
  subject1 = new Subject<any>();
  behavSubject = new BehaviorSubject<PassengerI>({
    id: 1,
    fullname: 'tom',
    checkedIn: true,
  });
  subjectData: PassengerI;
  subject_1_Data: any;
  behavSubjectData: PassengerI;
  vowels$ = from(['a', 'e', 'i', 'o', 'u']);
  vowel: string;
  constructor() {
    this.subject.subscribe({
      next: (data) => {
        this.subjectData = data;
        console.log('next block', data);
      },
      error: (error) => {
        console.log('error block', error);
      },
      complete: () => {
        console.log('complete block', this.subjectData);
      },
    });
    this.subject.next({ id: 1, fullname: 'tom', checkedIn: true });

    this.subject1.subscribe({
      next: (data) => {
        this.subject_1_Data = data;
        console.log('next block', data);
      },
      error: (error) => {
        console.log('error block', error);
      },
      complete: () => {
        console.log('complete block', this.subject_1_Data);
      },
    });
    this.subject1.next('vvb');

    this.behavSubject.subscribe({
      next: (data) => {
        this.behavSubjectData = data;
        console.log('next block', data);
      },
      error: (error) => {
        console.log('error block', error);
      },
      complete: () => {
        console.log('complete block', this.behavSubject);
      },
    });
    this.subject.next({ id: 1, fullname: 'tom', checkedIn: true }); // try uncommenting this line then also you will get some data, which we set it in beginning while initializing the behaviour subject.
  }
  ngOnInit() {
    // this.subjectMethod();
  }

  subjectMethod() {
    this.vowels$.subscribe({
      next: (x) => {
        setInterval(function () {
          // console.log(Math.floor(Math.random() * 100));
          this.randomNumber = Math.floor(Math.random() * 100);
        }, 4000);
        this.vowel = x;
        console.log('The next vowel is: ', x);
      },
      error: (err) => console.error('An error occurred', err),
      complete: () => console.log('There are no more vowels.'),
    });
  }

}

