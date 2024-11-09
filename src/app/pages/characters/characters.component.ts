import { ICharacter } from './../../interfaces/icharacter.interface';
import { Component, inject } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { CardCharacterComponent } from '../../components/card-character/card-character.component';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CardCharacterComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {

  characters: ICharacter[] = [];

  info: any;

  // Inyección de dependencias/servicios - peticiones
  private service = inject(ServicesService);

  // Al iniciar el componente se characters (pag) se ejecuta lo primero:
  async ngOnInit() {
    try {
      const results = await this.service.getAllCharacters(1);
      this.characters = results.results;
      this.info = results.info;
    } catch (error) {
      console.error(error);
    }
  }

  async nextPage() {
    const nextPage = this.info.next;
    if (!nextPage) return;
    try {
      const resultPage = await this.service.getCharactersByUrl(nextPage);
      this.characters = resultPage.results;
      this.info = resultPage.info;
    } catch (error) {
      console.log(error)
    }
  }


  // Retroceder: Le pasamos por parámetro la información de la prev, que está guardado en la variable info
  async previousPage() {
    const previousPage = this.info.prev;
    if (!previousPage) return;
    try {
      const resultPage = await this.service.getCharactersByUrl(previousPage);
      this.characters = resultPage.results;
      this.info = resultPage.info;
    } catch (error) {
      console.log(error)
    }
  }

  scrollTop() {
    window.scrollTo({ top: 0 });
  }
}
