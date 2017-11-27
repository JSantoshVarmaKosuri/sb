import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SbHeaderComponent } from "./Components/HeaderComponent/sb.header.component";

@NgModule({
    declarations: [SbHeaderComponent],
    imports: [CommonModule, RouterModule],
    exports: [
        CommonModule,
        SbHeaderComponent
    ]
})
export class SbSharedModule {
    
}