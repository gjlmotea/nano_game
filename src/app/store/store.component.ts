import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  weapons: Array<Weapon> = [
    {name: '小劍', dollar: 4, attr:{'atk': 1}},
    {name: '彎刀', dollar: 4, attr:{'atk': 2}},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Weapon {
  name: string;
  dollar: number;
  attr: {atk?: number; def?: number};
}
