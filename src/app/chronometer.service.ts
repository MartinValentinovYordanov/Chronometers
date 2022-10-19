import { Injectable, Input } from '@angular/core';
import { Chronometer } from './model/chronometer';

@Injectable({
  providedIn: 'root'
})
export class ChronometerService {

  constructor(public Model:Chronometer) { 

  }
  private interval: any;

  public isRemoved: boolean = false;

  public changeIsRemoved() : void {

      this.isRemoved = !this.isRemoved;

  }
  public updateChronometer(model: Chronometer) {

    this.Model = model;
      if (this.Model.isRunning) {

          this.startTimer();

      } else {

          this.stopTimer();
      }
  }
  public SwitchIsRunning():Boolean{
    this.Model.isRunning=!this.Model.isRunning;
    return this.Model.isRunning;
  }
  public startTimer() {

      this.interval = setInterval(() => {

          this.Model.timer.milliseconds += 1;

          if (this.Model.timer.milliseconds == 100) {

              this.Model.timer.milliseconds = 0;

              this.Model.timer.seconds += 1;

          }
          if (this.Model.timer.seconds == 60) {

              this.Model.timer.seconds = 0;

              this.Model.timer.minutes += 1;

          }

      }, 10)
      
  }
  private stopTimer() {

    this.Model.isRunning = false;

    clearInterval(this.interval);

}

public resetTimer() {

    this.stopTimer();

    this.Model.timer.minutes = 0;

    this.Model.timer.seconds = 0;

    this.Model.timer.milliseconds = 0;

}
}
