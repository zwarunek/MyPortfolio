import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  constructor(private http: HttpClient) {}

  get(uri: string) {
    return this.http.get(uri);
  }
  post(uri: string, payload: Object, headers: any) {
    return this.http.post(`${uri}`, payload, headers);

  }
  patch(uri: string, payload: Object) {
    return this.http.patch(uri, payload);
  }
  delete(uri: string) {
    return this.http.delete(uri);
  }

}
