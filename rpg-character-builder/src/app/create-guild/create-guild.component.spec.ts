import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGuildComponent } from './create-guild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { compileNgModule } from '@angular/compiler';
import { ComponentRef } from '@angular/core';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty or incorrectly filled out', () =>{
    expect(component.guildForm.valid).toBeFalsy();
  });

  it('should validate the form with the correct input', () =>{
    component.guildForm.controls['guildName'].setValue('Astralis Sect');
    component.guildForm.controls['description'].setValue('Sect of the Stars');
    component.guildForm.controls['type'].setValue('Competitive');
    component.guildForm.controls['notificationPreference'].setValue('Email');
    component.guildForm.controls['acceptTerms'].setValue('true');

    expect(component.guildForm.valid).toBeTruthy();
  });

  it('should add a guild to the list on form submission', () =>{
    component.guildForm.controls['guildName'].setValue('Astralis Sect');
    component.guildForm.controls['description'].setValue('Sect of the Stars');
    component.guildForm.controls['type'].setValue('Competitive');
    component.guildForm.controls['notificationPreference'].setValue('Email');
    component.guildForm.controls['acceptTerms'].setValue('true');

    component.onSubmit();

    expect(component.guilds.length).toBe(1);
    expect(component.guilds[0].guildName).toBe('Astralis Sect');
  });
});