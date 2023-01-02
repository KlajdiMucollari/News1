import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c4c3551ce15945438fbc290d0f7ccbfd";

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=c4c3551ce15945438fbc290d0f7ccbfd";

  scienceApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=c4c3551ce15945438fbc290d0f7ccbfd";

  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c4c3551ce15945438fbc290d0f7ccbfd";
  
  //new api code: "d79cf9f33e9647c9b498713c67d11c75"

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  scienceNews(): Observable<any> {
    return this._http.get(this.scienceApiUrl);
  }

  sportsNews(): Observable<any> {
    return this._http.get(this.sportsApiUrl);
  }

}
