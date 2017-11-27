import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SbHeaderComponent } from "./Components/HeaderComponent/sb.header.component";

@NgModule({
    declarations: [SbHeaderComponent],
    imports: [CommonModule],
    exports: [
        CommonModule,
        SbHeaderComponent
    ]
})
export class SbSharedModule {
    
}