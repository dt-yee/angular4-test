import { Component } from '@angular/core';
import { DataService } from './data.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
// import { Transform } from 'stream';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`
  <h3>hello moto</h3>
  <p>i will succeed</p>
  <p>{{myObject.location}}</p>

  
  <div *ngIf="!myArr; then tmp2 else otherTmp1"></div>
  

  <ng-template #tmp2>yes</ng-template>
  <ng-template #otherTmp1>no</ng-template>
  <p>
  <button (click)="myEvent($event)">My Button</button>
  </p>

  <p>{{sp}}</p>

  <p [class.p1]="true" [@myAnimation] = 'states' (click)="animateMe()"> I will animate</p>
  `,
  // styleUrls: ['./app.component.css']
  styles:[`
    .p1{
      width:200px;
      background:lightgray;
      margin:100px auto;
      text-align:center;
      padding:20px;
      font-size:1.5em;
    }
  `],

  animations:[
    trigger('myAnimation',[
      state('small',style({
        transform: 'scale(1)',
      })),
      state('large',style({
        transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in')),
    ]),
    
  ]
})
export class AppComponent {
  title = 'app';

  myObject = {
    gender:'male',
    age:'33',
    location:'USA'
  }

  myArr = true;

  myEvent(event){
    console.log(event);
  }

  constructor(private dataService:DataService){

  }
  
  sp:string="";

  ngOnInit(){
    console.log(this.dataService.cars);
    this.sp = this.dataService.myData();
  }
  states:string = "small"
  animateMe(){
    this.states = (this.states === 'small' ? 'large' : 'small')
  }
}
