import { Component, Input } from '@angular/core';
import { ICharacter } from '../../interfaces/icharacter.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.css'
})
export class CardCharacterComponent {

  @Input() character!: ICharacter;

  getStatusIndicator(status: string): string {
    if (status === 'Alive') return 'alive';
    if (status === 'Dead') return 'dead';
    return 'unknown';
  }

}
