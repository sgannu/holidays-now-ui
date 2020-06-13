import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private destinationServiceUrl = 'http://localhost:8080/destinations';
  constructor(private http: HttpClient) { }

  getDestinations() {
    return this.http.get<string>(this.destinationServiceUrl);
  }
}

