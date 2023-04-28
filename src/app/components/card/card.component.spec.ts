import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let mockSanitizer: DomSanitizer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      providers: [
        { provide: DomSanitizer, useValue: jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']) }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockSanitizer = TestBed.inject(DomSanitizer);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display image when image content', () => {
    component.contentType = 'image';
    component.imageSrc = 'assets/test.png';
    component.imageAlt = 'Test Image';

    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.nativeElement.src).toContain('assets/test.png');
    expect(imgElement.nativeElement.alt).toBe('Test Image');
  });

  it('should display slide count', () => {
    component.slideFix = 'Slide 1';

    fixture.detectChanges();

    const slideCountElement = fixture.debugElement.query(By.css('.slide-count'));
    expect(slideCountElement.nativeElement.textContent.trim()).toBe('Slide 1');
  });

  it('should display material title', () => {
    component.materialTitle = 'Test Title';

    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('.slide-title'));
    expect(titleElement.nativeElement.textContent.trim()).toBe('Test Title');
  });
});
