import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routes = {
    characters: { url: ['characters'] },
    comics: { url: ['comics'] },
    events: { url: ['events'] }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
