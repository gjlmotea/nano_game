import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  max_hp = 5
  hp = 5

  constructor() { }

  ngOnInit(): void {
  }

}
