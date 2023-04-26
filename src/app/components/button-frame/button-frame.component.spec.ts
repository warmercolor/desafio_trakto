import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFrameComponent } from './button-frame.component';

describe('ButtonFrameComponent', () => {
  let component: ButtonFrameComponent;
  let fixture: ComponentFixture<ButtonFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
