import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiservicesService {
  constructor(private _http: HttpClient) {}

  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=7c7d2e55fa7048ce9c8a1899b7333d92';

  techApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=7c7d2e55fa7048ce9c8a1899b7333d92';

  scienceApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=7c7d2e55fa7048ce9c8a1899b7333d92';

  sportsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=7c7d2e55fa7048ce9c8a1899b7333d92';

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
