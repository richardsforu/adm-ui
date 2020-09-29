import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent-Child';

  msg:string;
  childMsg:string;

  greet(s1){
    console.log('----- greet:: '+s1);
    this.msg=s1;
    
  }

  test(s2){
    console.log('-- test function :: '+s2);
    this.childMsg=s2;
    
  }
}
