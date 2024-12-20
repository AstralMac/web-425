export interface Character{
  characterId: number;
  characterName: string;
  characterGender: string;
  characterClass: string;
}

import { Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule, CharacterListComponent],
  template: `
    <div class="create-character-container">
      <form class="create-character-form" #characterForm="ngForm" (ngSubmit)="addCharacter()">
        <h1>Create a New Character</h1>

        <fieldset>
          <legend> Character Details</legend>

          <label for="name">Name:</label>
          <input type="text" id="name" name="name" class="name-input" [(ngModel)]="newCharacter.characterName" required>

          <label for="gender">Gender:</label>
          <select id="gender" name="gender"[(ngModel)]= "newCharacter.characterGender" required>
            <option value="Male">Male</option>
            <option value ="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label for= "class">Class:</label>
          <select id="class" name="class" [(ngModel)]="newCharacter.characterClass" required>
            <option value= "Warrior">Warrior</option>
            <option value= "Mage">Mage</option>
            <option value= "Rogue">Rogue</option>
          </select>

          <button type="submit">Create Character</button>
        </fieldset>
      </form>

      <div class="character-list">
        <app-character-list [characters]="characters"></app-character-list>
      </div>
    </div>
  `,
  styles: [`
    .create-character-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .create-character-form{
      width: 100%;
      max-width: 400px;
    }

    fieldset{
      margin-bottom:20px;
    }

    label, select, input, button{
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }

    .character-list ul{
      list-style: none;
      padding: 0;
    }

    .character-list li{
      padding: 5px;
      border: 1px solid #ddd;
      margin-bottom: 5px;
    }
    `]
})
export class CreateCharacterComponent {
  characters: Character[]=[];
  newCharacter: Character ={
    characterId: 0,
    characterName:'',
    characterGender:'',
    characterClass:''
  };
  @Output() characterCreated = new EventEmitter<Character []>();

  addCharacter():void{
    //generate a random ID for the character
    this.newCharacter.characterId=Math.floor(Math.random()*1000)+1;

    //add the new character to the list
    this.characters.push({...this.newCharacter});

    //reset the form
    this.resetForm();

    this.characterCreated.emit(this.characters);
  }

  resetForm(): void{
    this.newCharacter={
      characterId:0,
      characterName:'',
      characterGender:'',
      characterClass:''
    };
  }
}
