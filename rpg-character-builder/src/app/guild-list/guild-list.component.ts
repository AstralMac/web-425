import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGuildComponent } from '../create-guild/create-guild.component';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [CommonModule],
  template: `
 <div class="guild-list-container">
  <div *ngIf="guilds.length; else noGuilds" class = "guild-cards">
      <div *ngFor="let guild of guilds" class="guild-card">
        <h3>{{guild.guildName}}</h3>
        <p>{{guild.description}}</p>
        <p>{{guild.type}}</p>
      </div>
    </div>
    <ng-template #noGuilds>
      <p>No guilds created yet</p>
    </ng-template>
 </div>
`,
  styles: `
    .guild-cards{
      display: flex;
      flex-wrap: wrap;
    }

    .guild-card{
      background: #e1e1e1;
      padding: 20px;
      margin: 10px;
      border-radius: 8px;
      width: 200px;
      text-align: center;
    }
  `
})
export class GuildListComponent {
  @Input() guilds: {guildName: string; description: string; type: string;} [] =[];
}
