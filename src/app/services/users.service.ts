import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";

interface UsersResponse {
  items: User[]
  totalCount: number
}

export interface User {
  name: string
  id: number
  photos: {
    email: string
    large: string
  }
  followed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) {}

  getUsers(page:number):Observable<User[]> {
    return this.http

  }
}
