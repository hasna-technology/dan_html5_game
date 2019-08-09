import {trigger, state, animate, style, transition} from '@angular/animations';

export function moveIn() {
  return trigger('moveIn', [
    state('void', style({position: 'fixed', width: '100%'}) ),
    state('*', style({position: 'fixed', width: '100%'}) ),
    transition(':enter', [
      style({opacity:'0', transform: 'translateX(100px)'}),
      animate('.6s ease-in-out', style({opacity:'1', transform: 'translateX(0)'}))
    ]),
    transition(':leave', [
      style({opacity:'1', transform: 'translateX(0)'}),
      animate('.3s ease-in-out', style({opacity:'0', transform: 'translateX(-200px)'}))
    ])
  ]);
}

export function fallIn() {
  return trigger('fallIn', [
    transition(':enter', [
      style({opacity:'0', transform: 'translateY(20px)'}),
      animate('.4s ease-in-out', style({opacity:'1', transform: 'translateY(0)'}))
    ]),
    transition(':leave', [
      style({opacity:'1', transform: 'translateX(0)'}),
      //animate('.3s ease-in-out', style({opacity:'0', transform: 'translateX(-200px)'}))
    ])
  ]);
}

export function fallInLeft() {
  return trigger('fallInLeft', [
    transition(':enter', [
      style({opacity:'0', transform: 'translateX(40px)'}),
      animate('.4s .2s ease-in-out', style({opacity:'1', transform: 'translateX(0)'}))
    ]),
    transition(':leave', [
      style({opacity:'1', transform: 'translateX(0)'}),
      //animate('.3s ease-in-out', style({opacity:'0', transform: 'translateX(-200px)'}))
    ])
  ]);
}