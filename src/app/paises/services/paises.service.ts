import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Pais, PaisSmall } from '../interfaces/paises.interface';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private baseUrl: string = 'https://restcountries.com/v2';

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
    const url: string = `${this.baseUrl}/regionalbloc/${region}?fields=name,alpha3Code`;

    return this.http.get<PaisSmall[]>(url);
  }

  getPaisPorCodigo(codigo: string) {
    if (!codigo) {
      return of(null);
    }
    const url = `${this.baseUrl}/alpha?codes=${codigo}`;
    return this.http.get<Pais[]>(url);
    // return this.http.get<Pais>(url);
  }

  getPaisPorCodigoSmall(codigo: string) {
    const url = `${this.baseUrl}/alpha/${codigo}?fields=name,alpha3Code`;

    return this.http.get<PaisSmall>(url);
  }

  getPaisesPorCodigos(pais: any) {
    const peticiones: Observable<PaisSmall>[] = [];

    if (pais !== null) {
      const borders: string[] = pais[0].borders;

      borders.forEach((codigo) => {
        const peticion = this.getPaisPorCodigoSmall(codigo);
        peticiones.push(peticion);
      });
    }

    return combineLatest(peticiones);
  }
}
