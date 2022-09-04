import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  equips: Array<Equip> = [
    {name: '小劍', dollar: 4, attr:{'atk': 1}},
    {name: '大盾', dollar: 8, attr:{'def': 2}},
    {name: '彎刀', dollar: 25, attr:{'atk': 4}},
    {name: '五角盾', dollar: 32, attr:{'def': 3}},
    {name: '雙刀匕', dollar: 36, attr:{'atk': 5}},
    {name: '方金盾', dollar: 126, attr:{'def': 6}},
    {name: '大魔劍', dollar: 222, attr:{'atk': 8}},
    {name: '風眼屏障', dollar: 359, attr:{'def': 7}},
    {name: '炎魔狂斧', dollar: 799, attr:{'atk': 10}},
  ]


  constructor() {
  }


  ngOnInit(): void {
  }

}

export interface Equip {
  name: string;
  dollar: number;
  attr: {atk?: number; def?: number};
}
