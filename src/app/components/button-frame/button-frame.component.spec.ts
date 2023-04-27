import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the button title', () => {
    component.titleBtn = 'Test';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.textContent).toContain('Test');
  });

  it('should display the icon when provided', () => {
    component.icon = 'assets/icon.png';
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement).toBeTruthy();
    expect(imgElement.nativeElement.src).toContain('assets/icon.png');
  });

  it('should change the hovering state on mouseover and mouseout', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));

    buttonElement.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(component.hovering).toBeTrue();

    buttonElement.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(component.hovering).toBeFalse();
  });
});
