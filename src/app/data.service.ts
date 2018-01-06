import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }

  cars = [
    'benz','bmw','audi'
  ]

  myData(){
    return 'this is my data, man!';
  }

}
