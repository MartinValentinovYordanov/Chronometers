import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { ChronometerProvider } from './chronometer.provider';
import { ChronometerComponent } from './chronometer/chronometer.component';
import { Chronometer } from './model/chronometer';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

constructor(private chronometerProvider:ChronometerProvider,private component:ChronometerComponent) {}
  private hubConnection !: signalR.HubConnection;

  public Register(){
    
    this.StartConnection ();
    this.RegisterEventAdd();
    this.RegisterEventUpdate();
    this.chronometerProvider.GetChronometers();
    this.RegisterDeleteEvent();
  }
  private StartConnection (): void{
    this.hubConnection= new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/chronometerSingalR')
    .build();

    this.hubConnection
    .start()
    .then(()=> console.log("connection started"))

    .catch(err=> console.log("err"))
  }
  private RegisterEventAdd(){
    this.hubConnection.on('Add', (model) => this.chronometerProvider.OnAdd(model));
  }
  private RegisterEventUpdate(){
    this.hubConnection.on('Update',(model)=> this.chronometerProvider.OnUpdate(model));
  }
  private RegisterDeleteEvent() : void {

    this.hubConnection.on('Delete', (id : number) => {
      this.chronometerProvider.Delete(id);
    });
  
  }
  }
   

