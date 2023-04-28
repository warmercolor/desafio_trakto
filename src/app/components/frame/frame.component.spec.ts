import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameComponent } from './frame.component';
import { ButtonFrameComponent } from '../button-frame/button-frame.component';
import { By } from '@angular/platform-browser';

describe('FrameComponent', () => {
  let component: FrameComponent;
  let fixture: ComponentFixture<FrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrameComponent, ButtonFrameComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FrameComponent);
    component = fixture.componentInstance;
    setInputs(component);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll cards left', () => {
    spyOn(component.cardWrapper.nativeElement, 'scrollTo');
    component.scrollCardsLeft();
    expect(component.cardWrapper.nativeElement.scrollTo).toHaveBeenCalledWith({
      left: -component.scrollOffset,
      behavior: 'smooth'
    });
  });

  it('should scroll cards right', () => {
    spyOn(component.cardWrapper.nativeElement, 'scrollTo');
    component.scrollCardsRight();
    expect(component.cardWrapper.nativeElement.scrollTo).toHaveBeenCalledWith({
      left: component.scrollOffset,
      behavior: 'smooth'
    });
  });

  it('should scroll cards left when scrollCardsLeft is called', () => {
    spyOn(component.cardWrapper.nativeElement, 'scrollTo');
    component.scrollCardsLeft();
    expect(component.cardWrapper.nativeElement.scrollTo).toHaveBeenCalledWith({
      left: -component['scrollOffset'],
      behavior: 'smooth',
    });
  });

  it('should scroll cards right when scrollCardsRight is called', () => {
    spyOn(component.cardWrapper.nativeElement, 'scrollTo');
    component.scrollCardsRight();
    expect(component.cardWrapper.nativeElement.scrollTo).toHaveBeenCalledWith({
      left: component['scrollOffset'],
      behavior: 'smooth',
    });
  });

  it('should display the correct inputs in the template', () => {
    const dateRangeEl = fixture.debugElement.query(By.css('.date-range')).nativeElement;
    const titleEl = fixture.debugElement.query(By.css('.title')).nativeElement;
    const subtitleEl = fixture.debugElement.query(By.css('.subtitle')).nativeElement;
    const buttonEl = fixture.debugElement.query(By.directive(ButtonFrameComponent));

    expect(dateRangeEl.textContent.trim()).toEqual(component.dateRange);
    expect(titleEl.textContent.trim()).toEqual(component.title);
    expect(subtitleEl.textContent.trim()).toEqual(component.subtitle);
    expect(buttonEl.componentInstance).toEqual(jasmine.objectContaining({
      textColor: component.textColor,
      bgColor: component.bgColor,
      hoverColor: component.hoverColor,
      titleBtn: component.titleBtn,
      icon: component.icon,
    }));
  });

  function setInputs(component: FrameComponent): void {
    component.dateRange = 'January 2022';
    component.title = 'Frame Title';
    component.subtitle = 'Frame subtitle';
    component.textColor = '#FFFFFF';
    component.bgColor = '#000000';
    component.hoverColor = '#CCCCCC';
    component.titleBtn = 'Button Title';
    component.icon = 'fa-icon';
  }
});
