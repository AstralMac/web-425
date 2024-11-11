export interface CharacterItem{
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Hello, rpg-character-builder</h1>
      <p>Check out Character info</p>

        <ul class = "character-container">
          @for (item of character; track item){
            <li class = "character-item">
              <div class="card">
                <h3>{{item.name}}</h3>
                <p>{{item.gender}}</p>
                <p>{{item.class}}</p>
                <p>{{item.faction}}</p>
                <p>{{item.startingLocation}}</p>
                <p>/{{item.funFact}}</p>
              </div>
            </li>
          }
        </ul>
    </div>
  `,
  styles: `
  .character-container{
    display: flex;
    flex-wrap: wrap;
    list-style-type:none;
    padding: 0;
  }

  .character-item{
    flex:0 1 calc(33.33% -10px);
    margin: 10px;
    box-shadow: 0 3px 9px rgba(0,0,0,0.1);
  }

  .card{
    padding: 20px;
    background-color: red;
  }
  `
})
export class PlayersComponent {
  character:CharacterItem[];

  constructor(){
    this.character = [
      { 
        "name": 'Thorn', 
        "gender": 'Male', 
        "class": 'Warrior', 
        "faction": 'The Iron Brotherhood', 
        "startingLocation": 'Ironhold', 
        "funFact": 'Thorn once single-handedly defeated a dragon.' 
      },
      { 
        "name": 'Logan', 
        "gender": 'Male', 
        "class": 'Rogue', 
        "faction": 'The Wolf Pack', 
        "startingLocation": 'Shadow Forest', 
        "funFact": 'Logan can regenerate rapidly, even from serious wounds.'
      },
      { 
        "name": 'Jean', 
        "gender": 'Female', 
        "class": 'Mage', 
        "faction": 'The Scarlet Coven', 
        "startingLocation": 'Mystic Falls', 
        "funFact": 'Jean possesses unparalleled telekinetic powers.' 
      },
      {
        "name": 'Guts', 
        "gender": 'Male', 
        "class": 'Warrior', 
        "faction": 'The Band of the Hawk', 
        "startingLocation": 'Midland', 
        "funFact": 'Guts wields a massive sword he calls Dragonslayer.' 
        },
      { 
        "name": 'Sakura', 
        "gender": 'Female', 
        "class": 'Healer', 
        "faction": 'The Cherry Blossom Guild', 
        "startingLocation": 'Konoha Village', 
        "funFact": 'Sakura is known for her medical expertise and immense strength.' 
      },
      { 
        "name": 'Tony', 
        "gender": 'Male', 
        "class": 'Engineer', 
        "faction": 'The Arcane Technicians', 
        "startingLocation": 'Stark Tower', 
        "funFact": 'Tony built his armor in a cave with limited resources.' 
      },
      { 
        "name": 'Zoro', 
        "gender": 'Male', 
        "class": 'Swordsman', 
        "faction": 'The Straw Hat Pirates', 
        "startingLocation": 'East Blue', 
        "funFact": 'Zoro fights with a unique three-sword style.' 
      },
      { 
        "name": 'Wanda', 
        "gender": 'Female', 
        "class": 'Sorceress', 
        "faction": 'The Scarlet Coven', 
        "startingLocation": 'Mystic Falls', 
        "funFact": 'Wanda can alter reality itself with her powers.' 
      },
      {
         "name": 'Naruto', 
         "gender": 'Male', 
         "class": 'Ninja', 
         "faction": 'The Leaf Village', 
         "startingLocation": 'Konoha Village', 
         "funFact": 'Naruto has the spirit of a nine-tailed fox within him.' 
        },
      { 
        "name": 'Eren', 
        "gender": 'Male', 
        "class": 'Warrior', 
        "faction": 'The Survey Corps', 
        "startingLocation": 'Shiganshina', 
        "funFact": 'Eren can transform into a titan to protect his friends.' 
      }
    ]
  }
}
