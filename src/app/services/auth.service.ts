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

enum ResultCode {
  success = 0,
  error = 1,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false

  constructor(private http: HttpClient) {
  }

  me() {
    return this.http.get<MeResponse>(`${environment.baseNetworkUrl}/auth/me`).subscribe((res) => {
      if (res.resultCode === ResultCode.success) {
        this.isAuth = true
      }
    })
  }
}
