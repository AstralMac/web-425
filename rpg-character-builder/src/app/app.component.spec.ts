import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    const activatedRouteStub ={
      snapshot: {
        paramMap:{
          get: () => 'staticValue',
        },
      },
    };

    const routes: Routes = [
      {path:'character', component: PlayersComponent}
    ]

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),AppComponent],
        providers:[
          {provide: ActivatedRoute, useValue: activatedRouteStub}
        ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'rpg-character-builder' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rpg-character-builder');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, rpg-character-builder');
  });

  it('should have correct route for Players Component', ()=>{
    const router = TestBed.inject(Router);
    const route = router.config.find(r=>r.path === 'character');
    expect(route).toBeDefined(); // Check if the route is defined
    if(route){
      expect(route.component).toBe(PlayersComponent);
    }
  });
});
