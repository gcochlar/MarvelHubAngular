import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  search(searchText: string): void {
    this.searchEvent.emit(searchText);
  }

}
