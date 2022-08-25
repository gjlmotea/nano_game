import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  weapons = [
    {'name': '小劍', 'ATK': '1', 'Dollar': '4'},
    {'name': '彎刀', 'ATK': '2', 'Dollar': '8'},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
