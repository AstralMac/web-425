import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <div>
    <h1>Welcome to RPG Character Builder</h1>
    <h2>Create, Customize, Conquer!</h2>
    <p>
      Dive into a world where your imagination shapes the characters you create.
      Customize your heroes, track their quests, and manage their journey through
      an expansive RPG universe.
    </p>
    <p>
      Whether you're a seasoned RPG fan or new to character-building, our platform
      is designed to inspire and empower your creativity.
    </p>
    <div class="highlights-container">
      <div class="highlight">
        <img src="/assets/character-customization.png" alt="character customization screen" />
        <p>
          Build unique characters with traits, abilities, and backgrounds that bring
          them to life. Every detail counts in creating your perfect RPG persona!
        </p>
      </div>
      <div class="highlight">
        <img src="/assets/epic-quests.png" alt="epic quest scene" />
        <p>
          Set out on thrilling adventures and quests tailored to challenge and
          grow your characters.
        </p>
      </div>
      <div class="highlight">
        <img src="/assets/inventory-management.png" alt="inventory management screen" />
        <p>
          Manage items, skills, and resources to ensure your characters are always
          ready for whatever comes their way.
        </p>
      </div>
    </div>
  </div>
`,
styles: [`
  .highlights-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
  }

  .highlight {
    text-align: center;
    flex: 0 1 calc(33.333% - 20px);
    box-sizing: border-box;
  }

  .highlight img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  .highlight p {
    margin-top: 11px;
  }
`]
})
export class HomeComponent {

}
