import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { CommonModule } from '@angular/common';
import { Character } from '../create-character/create-character.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of characters when provided', () =>{
    const mockCharacters: Character []=[
      {characterId: 1, characterName: 'Archer', characterGender: 'Female', characterClass: 'Mage'},
      {characterId: 2, characterName: 'Deadpool', characterGender: 'Male', characterClass:'Warrior'}
    ];

    component.characters = mockCharacters;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const listCharacters = compiled.querySelectorAll('li');
    expect(listCharacters.length).toBe(2);
    expect(listCharacters[0].textContent).toContain('Archer');
    expect(listCharacters[1].textContent).toContain('Deadpool');
  });

  it('should display "No Character Created Yet" when the list is empty', ()=> {
    component.characters = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p')?.textContent).toContain('No Characters Created Yet');
  });
});
