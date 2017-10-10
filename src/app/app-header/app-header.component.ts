import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class HeaderComponent implements OnInit {
  text;
  @Output() searchText = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  search(term){
    this.searchText.emit(term);
  }

}
