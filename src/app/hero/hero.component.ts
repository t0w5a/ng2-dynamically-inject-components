import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
    title:string = 'default title';

    constructor(private api:ApiService) {
    }

    ngOnInit() {
    }

    // this method is used to prove that the injected services in the dynamically injected components works fine!
    showPowers() {
        console.log('powers list: ', this.api.getHeroPowers());
    }

}
