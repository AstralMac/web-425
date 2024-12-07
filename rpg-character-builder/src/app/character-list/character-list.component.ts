import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../create-character/create-character.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="character-list">
      <h2>Character List</h2>
      <ul *ngIf="characters.length> 0; else noCharacters">
        <li *ngFor="let character of characters">
          <strong>ID:</strong> {{character.characterId}}
          <br />
          <strong>Name:</strong> {{character.characterName}} 
          <br />
          <strong>Gender:</strong> {{character.characterGender}}
          <br />
          <strong>Class:</strong> {{character.characterClass}}
        </li>
      </ul>
      <ng-template #noCharacters>
        <p>No Characters Created Yet</p>
      </ng-template>
    </div>
  `,
  styles: `
  .character-list ul{
    list-style: none;
    padding: 0;
  }

  .character-list li{
    padding: 5px;
    border: 1px solid #ddd
  }
  `
})
export class CharacterListComponent {
  @Input() characters:{characterId: number; characterName: string; characterGender: string; characterClass: string; }[]=[];
}
