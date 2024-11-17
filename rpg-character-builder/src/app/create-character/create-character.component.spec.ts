import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';


describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places',()=>{
    component.newCharacter ={
      characterId:0,
      characterName: 'Deadpool',
      characterGender:'Male',
      characterClass: 'Warrior'
    };
    
    component.addCharacter(); //This will trigger the generation of a new character ID
    expect(component.characters[0].characterId).toBeGreaterThan(0);
    expect(component.characters[0].characterId).toBeLessThan(1000);
    expect(Number.isInteger(component.characters[0].characterId)).toBe(true);
  });

  it('should add a character with correct customization',()=>{
    component.newCharacter ={
      characterId:0,
      characterName: 'Deadpool',
      characterGender:'Male',
      characterClass: 'Warrior'
    };
    component.addCharacter();

    const addedCharacter= component.characters[0];
    expect(addedCharacter.characterName).toBe('Deadpool');
    expect(addedCharacter.characterGender).toBe('Male');
    expect(addedCharacter.characterClass).toBe('Warrior');
  });

  it('should reset all form fields to their default values after resetForm is called',()=>{
    component.newCharacter={
      characterId:0,
      characterName: 'Deadpool',
      characterGender:'Male',
      characterClass:'Warrior'
    };
    component.resetForm();
    
    expect(component.newCharacter.characterId).toBe(0);
    expect(component.newCharacter.characterName).toBe('');
    expect(component.newCharacter.characterGender).toBe('');
    expect(component.newCharacter.characterClass).toBe('');
  });

  it('should handle empty character list correctly', () => {
    expect(component.characters.length).toBe(0);
  });

  it('should append characters to the list when addCharacter is called', () => {
    component.newCharacter = {
      characterId: 0,
      characterName: 'Archer',
      characterGender: 'Female',
      characterClass: 'Mage'
    };
    component.addCharacter();

    component.newCharacter = {
      characterId: 0,
      characterName: 'Berserker',
      characterGender: 'Male',
      characterClass: 'Warrior'
    };
    component.addCharacter();

    expect(component.characters.length).toBe(2);
    expect(component.characters[1].characterName).toBe('Berserker');
  });
});
