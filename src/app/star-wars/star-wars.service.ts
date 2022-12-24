
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class StarWarsService {
    constructor(
        private http: HttpClient
    ) { }

    public api_url = "https://jsonplaceholder.typicode.com/"
    public getStarWars() {
        return this.http.get(`${this.api_url}posts`)
    }
}
