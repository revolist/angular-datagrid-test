import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns = [
    {
      name: "Greeting",
      prop: "name"
    },
    {
      prop: "details"
    }
  ];
  rows = [
    {
      name: "I am",
      details: "Angular"
    },
    {
      name: "Hello",
      details: "Angular"
    }
  ];
}
