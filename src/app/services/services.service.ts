import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
// Inyectamos la libreria http dentro del servicio para poder hacer las peticiones. Hay que importar provideHttpClient() en el app.module
  private http = inject(HttpClient);
  private url = 'https://rickandmortyapi.com/api/character?page=';

// firstValueFrom sirve para convertir la promesa en un observable, para que si cambie el valor se actualice el observable
  async getAllCharacters(page: number) {
    return await firstValueFrom(this.http.get<any>(`${this.url}${page}`));
  }
  
  async getCharactersByUrl(url: string) {
        return await firstValueFrom(this.http.get<any>(`${url}`));
  }

}
