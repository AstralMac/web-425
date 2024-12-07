import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuildListComponent } from './guild-list.component';
import { CommonModule } from '@angular/common';
import { Guild } from '../create-guild/create-guild.component';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of guilds', () => {
    const mockGuilds: Guild[] =[
      {guildName: 'Astralis Sect', description: 'Sect of the Stars', type: 'competitive'},
      {guildName: 'Mages Guild', description: 'Guild of Mages', type:'Casual'}
    ];

    component.guilds = mockGuilds;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const guildCard = compiled.querySelectorAll('.guild-card');

    expect(guildCard.length).toBe(2);
    expect(guildCard[0].textContent).toContain('Astralis Sect');
    expect(guildCard[1].textContent).toContain('Mages Guild')
  });

  it('should display message if no guilds', () => {
    component.guilds = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('No guilds created yet')
  });
  
});
