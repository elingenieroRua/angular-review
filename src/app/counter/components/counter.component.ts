import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public counter: number = 0;
  increaseBy(sign: number): void {
    this.counter = this.counter + sign;
  }
  resetCounter(value: number) {
    this.counter = value;
  }
}
