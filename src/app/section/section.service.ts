import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SectionService {
    constructor(private httpclient: HttpClient) {}
    get(business: string) {
        return this.httpclient.get('./assets/data/'+business+'.json');
    }
}