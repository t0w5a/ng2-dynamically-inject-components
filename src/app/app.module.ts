import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeroComponent } from './hero/hero.component';
import { ApiService } from './api.service'

@NgModule({
    declarations: [
        AppComponent,
        ContainerComponent,
        HeroComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ApiService],
    entryComponents: [HeroComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
