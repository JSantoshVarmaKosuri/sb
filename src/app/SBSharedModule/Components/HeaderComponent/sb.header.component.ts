import { Component } from "@angular/core";
import { state, trigger, transition, animate, style, group } from '@angular/animations';

@Component({
    selector: 'sb-header',
    templateUrl: 'sb.header.component.html',
    styleUrls: ['sb.header.component.scss'],
    animations: [
        trigger('sidemenu', [
          state('in', style({
            opacity: 1,
            transform: 'translateX(0)'
          })),
          state('out', style({
            opacity: 0.5,
            transform: 'translateX(-100%)'
          })),
          state('init', style({
            display: 'flex',
          })),
          transition('out <=> in', animate(500)),
          transition('init <=> in', animate(500))
        ])
    ]
})  
export class SbHeaderComponent {
    animationState = 'init';

    onMenu() {
        (this.animationState === 'out' || this.animationState === 'init') ? this.animationState = 'in' : this.animationState = 'out';
    }
}