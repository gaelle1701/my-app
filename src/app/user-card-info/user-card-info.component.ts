import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users } from '../users';

@Component({
  selector: 'app-user-card-info',
  templateUrl: './user-card-info.component.html',
  styleUrls: ['./user-card-info.component.scss']
})

export class UserCardInfoComponent implements OnInit{
  @Output() info= new EventEmitter();
  user: any;
  users = users;

  constructor(
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap; 
    console.log("routeParam :",routeParam);
    const id = String(routeParam.get('userId'));
    console.log('id:', id);
    this.user = users.find(user => user.login.uuid === id)
  }

}
