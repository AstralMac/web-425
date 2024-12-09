import { Component, EventEmitter, Output, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { GuildListComponent } from '../guild-list/guild-list.component';

export interface Guild{
  guildName: string;
  description: string;
  type: string;
}

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, GuildListComponent],
  template: `
  
    <div class ="guild-form-container">
      <form [formGroup]="guildForm" class = "create-guild-form" (ngSubmit)="onSubmit(); guildForm.reset();">
        <h1>Complete to form your new guild</h1>
        <fieldset>
          <legend>New Guild Form</legend>
          
          <label for="guildName">Guild Name:</label>
          <input type= "text" formControlName="guildName" id="guildName" />
          
          <label for="description">Description:</label>
          <textarea id="description" formControlName="description" rows="5"></textarea>

          <label for= "type">Type:</label>
          <select id= "type" formControlName="type">
            <option value="Competitive">Competitive</option>
            <option value="Casual">Casual</option>
            <option value="Social">Social</option>
            <option value="Educational">Educational</option>
          </select>

          <div class="notificationPreference">
            <label >Notification Preference:</label>
            <label><input type="radio" formControlName="notificationPreference" value="Email"/>Email</label>
            <label><input type="radio" formControlName="notificationPreference" value="SMS"/>SMS</label>
            <label><input type="radio" formControlName="notificationPreference" value="In-App"/>In-App</label>
          </div>
          <br>
          <label><input class="acceptTerms" type="checkbox" formControlName="acceptTerms"/> I accept the terms and conditions</label>

          <button type="submit" [disabled]="!guildForm.valid">Create Guild</button>
        </fieldset>
      </form>
      <div class= "guild-list">
        <app-guild-list [guilds]="guilds"></app-guild-list>
      </div>
  
    </div>
  `,
  styles: `
    .guild-form-container{
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 10px;
      background-color: #f9f9f9;
    }

    .guild-form-container form{
      display:flex;
      flex-direction: column;
      width: 100%;
    }

    .guild-form-container label{
      margin-bottom: 5px;
      font-weight:bold;
    }

    .guild-form-container input,
    .guild-form-container textarea,
    .guild-form-container select{
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 100%;
    }

    .guild-form-container button{
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }

    .guild-form-container button[disabled]{
      background-color: #ccc;
      cursor: not-allowed;
    }

    .guild-list{
      margin-top: 20px;
    }

    .guild-card{
      border: 1px solid #ccc;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    fieldset{
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 15px;
      margin-bottom: 15px;
    }

    legend{
      font-weight: bold;
      padding: 0 5px;
    }
  `
})
export class CreateGuildComponent {
  guilds: Guild[]=[];
  newGuild: Guild ={
    guildName: '',
    description:'',
    type: ''
  };

  @Output() guildCreated = new EventEmitter<Guild[]>();

  //All fields required
  guildForm: FormGroup = this.fb.group({
    guildName:[null, Validators.compose([Validators.required])],
    description: [null, Validators.compose([Validators.required])],
    type: [null, Validators.compose([Validators.required])],
    notificationPreference: [null, Validators.compose([Validators.required])],
    acceptTerms: [null, Validators.compose([Validators.required])]
  });
  
  constructor(private fb: FormBuilder){}

  onSubmit():void{
    if(this.guildForm.valid){
      // Construct a new guild object from the form values
      const newGuild: Guild = this.guildForm.value;
      this.guilds.push(newGuild); //PUSH THE newGuild OBJECT!!!
      this.guildCreated.emit(this.guilds);
      this.guildForm.reset();
      alert('Guild created successfully!');
    }
  }
}
