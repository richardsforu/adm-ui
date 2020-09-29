import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor() { }

  @Input()
  message: string

  @Output()
  parentMsg=new EventEmitter();

  greetBack(childMsg){
    console.log('-- Clicked... '+childMsg);
    this.parentMsg.emit(childMsg);
    
  }

  ngOnInit(): void {
  }

}
