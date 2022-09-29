import {Component, OnInit} from '@angular/core';
import {User, UsersService} from "../../services/users.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>

  // constructor(private usersService: UsersService) {
  constructor(private usersService: UsersService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.getUsers(1)
  }

  getUsers(page:number) {
    this.users$ = this.usersService.getUsers(page)
  }

  nextUserHandler() {
    const page = Number(this.route.snapshot.queryParamMap.get('page'))
    const nextPage=page+1
    this.getUsers(nextPage)
  }
}
