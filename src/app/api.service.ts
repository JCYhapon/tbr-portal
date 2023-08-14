import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { users } from './users';

Injectable({
    providedIn: 'root'
})

export class ApiService{
    baseUrl:string = "http://localhost/backend_php/";
    constructor(private httpClient : HttpClient) { }

    public userregistration(name:any, email:any, password:any){
        return this.httpClient.post<any>(this.baseUrl + '/register.php', 
        {
            name, email, password}
        )
        .pipe(map(users => {
            return users;
        }));
            
        }
    }
