import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../auth/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string="http://localhost:8080/api/v1" //URL de la API

  constructor(private http:HttpClient) { }


  getUser(id:number):Observable<User>{
    return this.http.get<User>(this.url + "user/" + id ).pipe(
        catchError(this.handleError)
    )
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }

}
