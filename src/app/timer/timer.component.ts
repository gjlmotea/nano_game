import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  time = 0;
  val = 0;

  constructor() {
    const source = timer(1000, 1000);
    const subscribe = source.subscribe(
      val => {
        this.time += 1
        this.val = val+1
      }
    );
  }

  ngOnInit(): void {
  }

}
