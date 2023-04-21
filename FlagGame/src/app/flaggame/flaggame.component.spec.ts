import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaggameComponent } from './flaggame.component';

describe('FlaggameComponent', () => {
  let component: FlaggameComponent;
  let fixture: ComponentFixture<FlaggameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlaggameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlaggameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
