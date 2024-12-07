import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

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

    <div class="signin-container">
      @if(email){
        <p>Welcome, {{email}}!</p>
        <button (click)= "signout()">Sign Out</button>
      }@else {
        <a routerLink="/signin" class="signin-link"></a>
      }
    </div>

    <main class = "main-content">
        <nav class = "nav-bar">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink= "/signin">Sign-In</a></li>
          <li><a routerLink="/players">Players</a></li>
          <li><a routerLink="/create-character">Create Character</a></li>
          <li><a routerLink="/create-guild">Create Guild</a></li>
          <li><a routerLink="/character-faction">Character Faction</a></li>
          <li><a routerLink="/character-list">Character List</a></li>
          <li><a routerLink="/guild-list">Guild List</a></li>
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
   .wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5; /* Neutral background */
  font-family: Arial, sans-serif; /* Clean and readable font */
}

.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c3e50; /* Darker background for contrast */
  color: white;
  padding: 20px;
  text-align: center;
}

.banner-img {
  max-width: 100%;
  height: auto;
  margin-right: 15px;
}

.signin-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  background-color: #ecf0f1; /* Light background to separate visually */
  border-bottom: 1px solid #bdc3c7; /* Subtle border for separation */
}

.signin-container p {
  margin-right: 10px;
}

.signin-link {
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}

.signin-link:hover {
  text-decoration: underline;
}

.main-content {
  display: flex;
  flex-grow: 1;
  padding: 20px;
  background-color: white;
}

.nav-bar {
  flex: 1;
  max-width: 200px;
  background-color: #34495e; /* Side navigation contrasting color */
  padding: 15px;
}

.nav-bar ul {
  list-style: none;
  padding: 0;
}

.nav-bar li {
  margin-bottom: 10px;
}

.nav-bar a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.nav-bar a:hover {
  color: #1abc9c; /* Accent hover color */
}

.content {
  flex: 3;
  padding: 20px;
  border-left: 1px solid #bdc3c7; /* Visual separation between nav and content */
}

.nav-footer {
  text-align: center;
  padding: 10px;
  background-color: #2c3e50;
  color: white;
  border-top: 1px solid #bdc3c7;
}

.nav-footer a {
  color: white;
  text-decoration: none;
  margin: 0 5px;
}

.nav-footer a:hover {
  color: #1abc9c;
}

footer p {
  margin-top: 10px;
}

button {
  padding: 10px 15px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
`]})
export class AppComponent {
  title = 'rpg-character-builder';
  email?: string;

  constructor(private authService: AuthService, private cookieService: CookieService){}

  ngOnInit(){
    this.authService.getAuthState().subscribe((isAuth) => {
      if(isAuth){
        this.email = this.cookieService.get('session_user');
      }
    });
  }

  signout(){
    this.authService.signout();
  }
}
