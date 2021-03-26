import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBlueComponent } from './team-blue.component';

describe('TeamBlueComponent', () => {
  let component: TeamBlueComponent;
  let fixture: ComponentFixture<TeamBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBlueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
