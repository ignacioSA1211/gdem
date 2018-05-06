import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteService {
  getApiUrl : string = "http://localhost/App/gdem/conexiondb/index.php/conexion";

  getPosts() {

    return  this.http.get(this.getApiUrl)
            .do((res : Response ) => console.log(res.json()))
            .map((res : Response ) => res.json())
            .catch(error => error.json());
}

  constructor(public http: HttpClient) {
    console.log('Hello RemoteServiceProvider Provider');
  }

}
