import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  customSubscription: Subscription;
  numbersSubscription: Subscription;
  number = 0;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.create((observer: Observer<Number>) => {
      setInterval(() => {
        observer.next(this.number++);
      }, 1000);
    });
    this.numbersSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const customObservable = Observable.create((observer: Observer<String>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);

      setTimeout(() => {
        observer.next('second package');
      }, 4000);

      setTimeout(() => {
        observer.error('fail city');
      }, 5000);
    });

    this.customSubscription = customObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy() {
    this.numbersSubscription.unsubscribe();
  }
}
