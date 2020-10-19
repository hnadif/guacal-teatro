import { 
  animate, 
  style,
  state,
  transition, 
  trigger 
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
//imports jquery    
declare var $: any;
@Component({
  selector: 'app-teatro',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css']
})
export class TeatroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('.carousel').carousel();
   })
  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
