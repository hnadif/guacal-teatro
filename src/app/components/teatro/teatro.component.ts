import { Component, OnInit } from '@angular/core';
//imports jquery    
declare var $: any;
@Component({
  selector: 'app-teatro',
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

}
