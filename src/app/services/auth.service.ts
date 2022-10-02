import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

interface MeResponse {
  data: {
    id: number
    login: string
    email: string
  }
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) {
  }
  getUsers(page:number):Observable<MeResponse>{
    return  this.http.get<MeResponse>(`${environment.baseNetworkUrl}/auth/me`)
  }
}
