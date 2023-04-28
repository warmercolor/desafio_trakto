import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsComponent } from './options.component';

describe('OptionsComponent', () => {
  let component: OptionsComponent;
  let fixture: ComponentFixture<OptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title, lineColor, imageSrc, and imageAlt from inputs', () => {
    component.title = 'Test Title';
    component.lineColor = '#123456';
    component.imageSrc = 'test-image-src.png';
    component.imageAlt = 'Test Image Alt';
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('h3');
    const lineElement = fixture.nativeElement.querySelector('.line');
    const imageElement = fixture.nativeElement.querySelector('.dynamic-image');

    expect(titleElement.textContent.trim()).toEqual('Test Title');
    expect(lineElement.style.backgroundColor).toEqual('rgb(18, 52, 86)');
    expect(imageElement.getAttribute('src')).toEqual('test-image-src.png');
    expect(imageElement.getAttribute('alt')).toEqual('Test Image Alt');
  });

  it('should toggle isExpanded when toggleLine is called', () => {
    expect(component.isExpanded).toBe(false);
    component.toggleLine();
    expect(component.isExpanded).toBe(true);
    component.toggleLine();
    expect(component.isExpanded).toBe(false);
  });

  it('should change line width on mouseenter and mouseleave events', () => {
    const containerElement = fixture.nativeElement.querySelector('.container');
    const lineElement = fixture.nativeElement.querySelector('.line');

    component.lineWidth = '200px';
    fixture.detectChanges();

    containerElement.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(lineElement.style.width).toEqual('200px');

    containerElement.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();
    expect(lineElement.style.width).toEqual('');
  });
});
