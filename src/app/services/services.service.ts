import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ICharacter } from '../interfaces/icharacter.interface';
import { IResponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // Inyectamos la libreria http dentro del servicio para poder hacer las peticiones. Hay que importar provideHttpClient() en el app.module.
  private http = inject(HttpClient);
  private url = 'https://rickandmortyapi.com/api/character?page=';
  private urlById = 'https://rickandmortyapi.com/api/character/';

  // firstValueFrom sirve para convertir la promesa en un observable, para que si cambie el valor se actualice el observable
  getAllCharacters(page: number): Promise<IResponse> {
    return firstValueFrom(this.http.get<any>(`${this.url}${page}`));
  }

  getCharactersByUrl(url: string): Promise<IResponse> {
    return firstValueFrom(this.http.get<any>(`${url}`));
  }

  getById(id: number): Promise<ICharacter> {
    return firstValueFrom(this.http.get<any>(`${this.urlById}/${id}`));
  }

}
