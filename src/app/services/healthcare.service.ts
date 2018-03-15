import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HealthcareService{
    http: any;
    baseUrl: String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'https://www.healthcare.gov/api';
    }

    getArticles(){
        return this.http.get(this.baseUrl+'/articles.json')
            .map(res => res.json());
    }
}