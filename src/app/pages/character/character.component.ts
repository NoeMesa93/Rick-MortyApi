import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { ICharacter } from '../../interfaces/icharacter.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  route = inject(ActivatedRoute);
  service = inject(ServicesService);
  character?: ICharacter;


  ngOnInit() {
    this.route.params.subscribe(async (params: any) => {
      let characterId = params.id;
      let character = await this.service.getById(characterId)
      this.character = character
    })
  }

}
