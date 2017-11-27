import { NgModule } from "@angular/core";

import { SbSharedModule } from "../SBSharedModule/sb.shared.module";

import { SbHomeComponent } from "./sb.home.component";
import { SbHomeEventsComponent } from "./Events/sb.home.events.component";

import { SbHomeRouter } from "./sb.home.router";


@NgModule({
    declarations: [
        SbHomeComponent,
        SbHomeEventsComponent
    ],
    imports: [
        SbSharedModule,
        SbHomeRouter
    ],
    exports: []
})
export class SbHomeModule {

}