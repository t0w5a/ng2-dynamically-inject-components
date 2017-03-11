import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/Rx';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    injectableComponents:string[] = ['app-hero', 'wrong-component'];

    constructor() {
    }

    ngOnInit() {
    }

}
