import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'hello orawan !!!';
  name: string;

  disabled = true;
  // get titleName() {
  //   return this.title;
  // }

  list = [{
    name: 'a',
    age: 15
  },
  {
    name: 'b',
    age: 16
  },
  {
    name: 'c',
    age: 17
  }];

  checkList() {
    return (this.list.length > 0);
  }

  constructor() {
    setTimeout(() => {
      this.disabled = false;
    }, 2000);
  }

  onClickBtn() {
    console.log('btn click !!');
  }
}
