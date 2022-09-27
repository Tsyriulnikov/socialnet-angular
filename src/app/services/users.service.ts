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
  httpOptions = {
    withCredentials: true,
    headers: new HttpHeaders().append('api-key', environment['apiKey'])
  }

  constructor(private http: HttpClient) {}

  getUsers():Observable<User[]> {
    return this.http
      .get<UsersResponse>(`${environment.baseNetworkUrl}/users`, this.httpOptions)
      .pipe(map(el=>el.items))
  }
}
