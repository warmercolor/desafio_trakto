import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header elements based on theme input', () => {
    component.theme = 'light';
    fixture.detectChanges();

    const headerElement = fixture.nativeElement.querySelector('.header');
    expect(headerElement.classList.contains('header-light')).toBe(true);

    component.theme = 'dark';
    fixture.detectChanges();
    expect(headerElement.classList.contains('header-light')).toBe(false);
  });

  it('should format date correctly', () => {
    const date = new Date(2023, 3, 24);
    const formattedDate = component.formatDate(date);
    expect(formattedDate).toEqual('24/04/2023');
  });

  it('should get initials from name', () => {
    const name = 'John Doe';
    const initials = component.getInitials(name);
    expect(initials).toEqual('JD');
  });

  it('should check if profile image exists', () => {
    component.profileImageUrl = 'https://example.com/image.jpg';
    expect(component.hasProfileImage()).toBe(true);

    component.profileImageUrl = null;
    expect(component.hasProfileImage()).toBe(false);
  });

  it('should render environment switch button when theme is light', () => {
    component.theme = 'light';
    fixture.detectChanges();

    const envSwitchButton = fixture.nativeElement.querySelector('.header-switch-env');
    expect(envSwitchButton).toBeTruthy();
    expect(envSwitchButton.textContent.trim()).toEqual('Trocar ambiente');
  });

  it('should render calendar and notification icons', () => {
    const calendarIconElement = fixture.nativeElement.querySelector('[alt="Calendar Icon"]');
    const notificationIconElement = fixture.nativeElement.querySelector('[alt="Notification Icon"]');

    expect(calendarIconElement).toBeTruthy();
    expect(notificationIconElement).toBeTruthy();
  });
});
