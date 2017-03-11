import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor() { }

  getHeroPowers() {
    return ['Power1', 'Power2', 'Power3'];
  }

}
