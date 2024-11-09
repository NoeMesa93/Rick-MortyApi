import { Component, Input } from '@angular/core';
import { ICharacter } from '../../interfaces/icharacter.interface';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.css'
})
export class CardCharacterComponent {

  @Input() character!: ICharacter;

}
