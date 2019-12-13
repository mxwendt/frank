import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  selectedNavItem: string;

  constructor() { }

  ngOnInit() {
  }

  setSelected(key: string) {
    this.selectedNavItem = key;
  }

}
