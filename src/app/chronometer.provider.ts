import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Chronometer } from './model/chronometer';
import { WebRequests } from './services/webRequests.service';
import * as signalR from "@aspnet/signalr";
import { SignalRService } from './signal-r.service';
import { ChronometerComponent } from './chronometer/chronometer.component';
import { ChronometerService } from './chronometer.service';
@Injectable({
  providedIn: 'root'
})
export class ChronometerProvider {
  
    chronometers : Map<number, ChronometerService> = new Map;
    //chronometers : Chronometer[] = [];
  constructor(private webRequests: WebRequests) {}
  public Add() : void {

    this.webRequests.Post().subscribe(() => {
      console.log('< post successful ! >')
    });

  }
  public OnAdd(model : Chronometer) : void {

    let service = new ChronometerService(model);

    this.chronometers.set(model.id, service);

  } 
  public removeChronometer(id : number) : void {

    this.webRequests.Delete(id).subscribe(() => {
      console.log('< delete successful ! >');
    });
  }

  GetChronometers() {
    this.webRequests.Get().subscribe((models : Chronometer[]) => {

      models.forEach((currentModel) => {

        let chronometer = new ChronometerService(currentModel);
        this.chronometers.set(currentModel.id, chronometer);

        if (chronometer.Model.isRunning) {

          chronometer.startTimer();

        }

      });
      console.log('< get successful ! > ');

    });
  }

  Delete(id: number) {
    let service = this.chronometers.get(id);
    
        service?.resetTimer();
    
        service?.changeIsRemoved();
    
        this.chronometers.delete(id);
  }

  OnUpdate(model: Chronometer): void {
    let service = this.chronometers.get(model.id);
    service?.updateChronometer(model);
  }
}
