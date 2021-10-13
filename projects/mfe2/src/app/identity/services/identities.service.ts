import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/mfe2/src/environments/environment';

export interface DidJwk {
  date: Date;
  did: string;
  jsonWebKey: { kid: string; publicKey?: string };
}
export interface ListIdentitiesResponse {
  didJwk: DidJwk[];
  xcorrelationId: string;
}

@Injectable({
  providedIn: 'root',
})
export class IdentitiesService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/ms-identity`;
  }

  getIdentities(userId: string) {
    //TODO usar userId del contexto
    return this.http.get<ListIdentitiesResponse>(`${this.baseUrl}/identity?userId=${'1234567890'}`);
  }
}
