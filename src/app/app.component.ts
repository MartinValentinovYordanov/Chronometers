import { Component, ElementRef, OnInit, ValueProvider, ViewChild, ViewContainerRef } from '@angular/core';
import { ChronometerProvider } from './chronometer.provider';
import { ChronometerComponent } from './chronometer/chronometer.component';
import { Chronometer } from './model/chronometer';
import { WebRequests } from './services/webRequests.service';
import { SignalRService } from './signal-r.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Chronometers';
  constructor(
    public chronometerProvider: ChronometerProvider,
    private signalR:SignalRService,
    private webRequest: WebRequests
    ){
  
  }
  AddChronometer():void
  {
    this.chronometerProvider.Add();
  }
  ngOnInit(): void {  
    this.signalR.Register();
   }
  
}