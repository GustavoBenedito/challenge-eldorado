import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsignupComponent } from './buttonsignup.component';

describe('ButtonsignupComponent', () => {
  let component: ButtonsignupComponent;
  let fixture: ComponentFixture<ButtonsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
