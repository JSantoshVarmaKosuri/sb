import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SbMainComponet } from './sb.main.componet';

import { SbMainRouter } from './sb.main.router';

import { SbHomeModule } from '../SBHomeModule/sb.home.module';

@NgModule({
    declarations: [SbMainComponet],
    imports: [
        BrowserModule,
        SbMainRouter,
        SbHomeModule
    ],
    exports: [],
    bootstrap: [SbMainComponet]
})
export class SbMainModule {

}