import { ChronometerComponent } from "../chronometer/chronometer.component";

export class Chronometer{
    id:number;
    timer :{
        minutes:number ,
        seconds:number,
        milliseconds:number
    } = { minutes:0, seconds:0, milliseconds: 0 }
    isRunning:Boolean = false;

    constructor(id:any,private component:ChronometerComponent) {
        this.id = id
    }
    
}