import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <div class ="wrapper">
    <header class = "banner">
      <img src="/assets/RPGCharacterBanner.png" alt = "website banner for RPG Builder application" class ="banner-img">
      <h1>Hello, rpg-character-builder</h1>
    </header>
    
    <main class = "main-content">
        <nav class = "nav-bar">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink= "/signin">Sign-In</a></li>
          <li><a routerLink="/players">Players</a></li>
          <li><a routerLink="/create-character">Create Character</a></li>
          <li><a routerLink="/create-guild">Create Guild</a></li>
          <li><a routerLink="/character-faction">Character Faction</a></li>
        </ul>
      </nav>

      <section class = "content">
        <router-outlet></router-outlet>
      </section>
    </main>
    
    <footer class = "footer">
      <nav class = "nav-footer">
        <a routerLink = "/">Home</a> |
        <a routerLink = "/signin">Sign-In</a> |
        <a routerLink = "/players">Players</a> |
        <a routerLink = "/create-character">Create Character</a> |
        <a routerLink = "/create-guild">Create Guild</a> |
        <a routerLink = "/character-faction">Character Faction</a> |
      </nav>
      <p>&copy; 2024 RPG Character Builder</p>
    </footer>
  </div>
        `,
  
  styles: [
    `
    `]})
export class AppComponent {
  title = 'rpg-character-builder';
}
