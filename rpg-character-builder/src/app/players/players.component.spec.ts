import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display a list of characters', ()=> {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const characterItem = compiled.querySelectorAll('.character-item'); // get all available characters
    expect(characterItem.length).toEqual(component.character.length); //check if the number of characters  is equal to the number of items in the character array
  })
});
