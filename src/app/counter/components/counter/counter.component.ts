import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  // templateUrl: './counter.component.html',
  template: `
    <div class="counter">
      <h3>Counter: {{contador}}</h3>
      <button (click)="increaseBy(1)">+1</button>
      <button (click)="reset()">Reset</button>
      <button (click)="increaseBy(-1)">-1</button>
    </div>
  `
})
export class CounterComponent {

  public contador:number=10;

  increaseBy(value:number):void{
    this.contador += value;
  }

  reset():void{
    this.contador = 10;
  }
}
