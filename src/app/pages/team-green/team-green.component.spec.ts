import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGreenComponent } from './team-green.component';

describe('TeamGreenComponent', () => {
  let component: TeamGreenComponent;
  let fixture: ComponentFixture<TeamGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamGreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
