import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Persons: Array<any>;
  constructor() { }

  ngOnInit() {
    this.Persons = [
      { nama: 1, email: "Coffees, teas", company: "tabeldata"},
      { nama: 2, email: "lililili", company:"lalalala"},
      { nama: 3, email: "lolololo", company: "lelele"}
    ];
  }
}
