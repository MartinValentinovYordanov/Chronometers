import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ChronometerProvider } from '../chronometer.provider';
import { BrowserModule } from '@angular/platform-browser'
import { Chronometer } from '../model/chronometer';
import { WebRequests } from '../services/webRequests.service';
import { ChronometerService } from '../chronometer.service';

@Component({
  selector: 'chronometer',
  templateUrl: `./chronometer.component.html`,
  styleUrls: ['./chronometer.component.css']
})
export class ChronometerComponent {

  @Input() public chronometerService!: ChronometerService;
  @Input() public chronometerId!: number;
  intervalsForTimers : any = [];
  providers !: ChronometerProvider;
  constructor(private webRequests: WebRequests,public chronometerProvider:ChronometerProvider) {
  }
  StartStopTimer(){
      this.chronometerService.SwitchIsRunning();
      this.webRequests.Put(this.chronometerService.Model).subscribe(x=> console.log("update"));
  }
  Delete() {
    this.webRequests.Delete(this.chronometerService.Model.id).subscribe(x=> console.log("delete"));
  }
  Reset(){
    this.chronometerService.resetTimer();
    this.webRequests.Put(this.chronometerService.Model).subscribe(x=> console.log("reset"));
  }
  // OnUpdate(model:Chronometer){
  //   this.chronometerModel= model;

  //   if(this.chronometerModel.isRunning){
  //         this.intervalsForTimers[this.chronometerModel.id] = setInterval(
  //           () => {
  //               this.IncreaseTimer();
  //           },
  //           10);
  //       }else{
  //         clearInterval(this.intervalsForTimers[this.chronometerModel.id]);
  //       }
  // }

  // IncreaseTimer(){
  //   this.chronometerModel.timer.milliseconds++;
      
  //     if(this.chronometerModel.timer.milliseconds>=99){
  //       this.chronometerModel.timer.seconds++;
  //       this.chronometerModel.timer.milliseconds=0;
  //     }
  //     if(this.chronometerModel.timer.seconds>=60){
  //       this.chronometerModel.timer.seconds=0;
  //       this.chronometerModel.timer.minutes++;
  //     }
  //   }
  // SwitchIsRunning() : Boolean {
  //   this.chronometerModel.isRunning=!this.chronometerModel.isRunning;
  //   return this.chronometerModel.isRunning;
  // }
  //   StartStopTimer() {
  //     this.webRequests.Put(this.chronometerModel);
  // }

  // IncreaseTimer(){
  //   this.chronometerModel.timer.milliseconds++
      
  //     if(this.chronometerModel.timer.milliseconds>=99){
  //       this.chronometerModel.timer.seconds++;
  //       this.chronometerModel.timer.milliseconds=0;
  //     }
  //     if(this.chronometerModel.timer.seconds>=60){
  //       this.chronometerModel.timer.seconds=0;
  //       this.chronometerModel.timer.minutes++;
  //     }
  //   }

  //   ResetTimer(){
  //   this.MakeTimerZero();
  //   this.SetIsRunningFalseAfterReset();
  //   this.ClearInterval();
  // }
  // MakeTimerZero(){
  //   this.chronometerModel.timer.milliseconds=0;
  //   this.chronometerModel.timer.seconds=0;
  //   this.chronometerModel.timer.minutes=0;
  // }
  // SetIsRunningFalseAfterReset(){
  //   this.chronometerModel.isRunning=false;
  // }
  // ClearInterval(){
  //   clearInterval(this.intervalsForTimers[this.chronometerModel.id]);
  // }
  // RemoveTimer() {
  //   this.ClearInterval();
  // }
  // StartTimer(){
    
  // }
  // OnUpdate(){
  //   if(this.chronometerModel.isRunning){
  //     this.intervalsForTimers[this.chronometerModel.id] = setInterval(
  //       () => {
  //           this.IncreaseTimer()
  //       },
  //       10);
  //   }else{
  //     this.ClearInterval();
  //   }
  // }

  }
  




