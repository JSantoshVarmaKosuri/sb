import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SbMainComponet } from './sb.main.componet';

import { SbMainRouter } from './sb.main.router';

import { SbHomeModule } from '../SBHomeModule/sb.home.module';

@NgModule({
    declarations: [SbMainComponet],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SbMainRouter,
        SbHomeModule
    ],
    exports: [],
    bootstrap: [SbMainComponet]
})
export class SbMainModule {

}