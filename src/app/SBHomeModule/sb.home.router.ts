import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SbHomeEventsComponent } from "./Events/sb.home.events.component";
import { SbHomeComponent } from "./sb.home.component";

const routes: Routes = [
    { path: 'home', component: SbHomeComponent, children: [
        { path: '', component: SbHomeEventsComponent },
        { path: 'events', component: SbHomeEventsComponent }
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SbHomeRouter {

}