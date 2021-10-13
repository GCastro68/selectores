import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private baseUrl: string = 'https://restcountries.com/v2/regionalbloc';

  private _regiones: string[] = [
    'EU (European Union)',
    'EFTA (European Free Trade Association)',
    'CARICOM (Caribbean Community)',
    'PA (Pacific Alliance)',
    'AU (African Union)',
    'USAN (Union of South American Nations)',
    'EEU (Eurasian Economic Union)',
    'AL (Arab League)',
    'ASEAN (Association of Southeast Asian Nations)',
    'CAIS (Central American Integration System)',
    'CEFTA (Central European Free Trade Agreement)',
    'NAFTA (North American Free Trade Agreement)',
    'SAARC (South Asian Association for Regional Cooperation)',
  ];

  get regiones() {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) {}

  getPaisesPorRegion(region: string) {
    const url: string = `${this.baseUrl}/${region}?fields=name,alpha3Code`;

    return this.http.get<PaisSmall[]>(url);
  }
}
