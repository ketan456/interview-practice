import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService{
  baseUrl: string = "environment.userUrl";
  constructor(private http: HttpClient) {}


  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/logout`, {});
  }

  ssoLogin(code: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, { code: code });
  }

  getAllUserList(
    search: any,
    locationId: any,
    departmentId: any
  ): Observable<any> {
    // http://localhost:8021/api/user/list?departmentId=1&locationId=1&search=
    let params = {
      search: search,
      locationId: locationId,
      departmentId: departmentId,
    };

    if (search == "" || search == undefined || search == null) {
      delete params["search"];
    }

    if (locationId == "" || locationId == undefined || locationId == null) {
      delete params["locationId"];
    }

    if (
      departmentId == "" ||
      departmentId == undefined ||
      departmentId == null
    ) {
      delete params["departmentId"];
    }

    return this.http.get(`${this.baseUrl}/user/list`, { params: params });
  }

  getToken() {
    let localStorageData = localStorage.getItem("userDetails");
    let token = "";
    if (localStorageData) {
      let parsedData = JSON.parse(localStorageData);
      if (parsedData.idToken) {
        return (token = parsedData.idToken);
      } else {
        return null;
      }
    }
    return token;
  }
  isAuthenticated() {
    let localStorageData = localStorage.getItem("userDetails");
    let token = null;
    let parsedData;
    if (localStorageData) {
      parsedData = JSON.parse(localStorageData);
      token = parsedData.idToken;
    }
    // if (this.jwtHelper.decodeToken(token).sub != null || '') {
    //   console.log("check expiration",this.jwtHelper.isTokenExpired(token));
    //   if (this.jwtHelper.isTokenExpired(token)) {
    //     this.router.navigate(['/authorization']);
    //   }
    // }
    if (token == null) {
      return false;
    } else {
      return true;
    }
  }


  getLocalUserDetails() {
    let localStorageData = localStorage.getItem("userDetails");
    if (localStorageData) {
      return JSON.parse(localStorageData);
    } else {
      return null;
    }
  }

  getPost(){
   return  this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
