import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageModule } from './homepage.module';
import { HomepageComponent } from './homepage.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageModule, RouterTestingModule],
      declarations: [HomepageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to dashboard on click', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const materialDidaticoElement = fixture.nativeElement.querySelector('.content app-options:first-child');
    materialDidaticoElement.click();
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should render all app-options elements', () => {
    const optionsElements = fixture.nativeElement.querySelectorAll('.content app-options');
    expect(optionsElements.length).toEqual(4);
  });

  it('should render app-header element', () => {
    const headerElement = fixture.nativeElement.querySelector('app-header');
    expect(headerElement).toBeTruthy();
  });

  it('should render correct icons for app-options elements', () => {
    const optionsElements = fixture.nativeElement.querySelectorAll('.content app-options');
    const expectedIcons = [
      '../../../assets/images/material.svg',
      '../../../assets/images/quiz.svg',
      '../../../assets/images/draw.svg',
      '../../../assets/images/youtube.svg'
    ];

    optionsElements.forEach((element: HTMLElement, index: number) => {
      const iconElement = element.querySelector('img');
      if (iconElement) {
        expect(iconElement.getAttribute('src')).toEqual(expectedIcons[index]);
      } else {
        fail('Icon element not found');
      }
    });
  });
});
