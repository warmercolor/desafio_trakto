import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonComponent } from './skeleton.component';

describe('SkeletonComponent', () => {
  let component: SkeletonComponent;
  let fixture: ComponentFixture<SkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render skeleton loader elements', () => {
    const skeletonLoaderElement = fixture.nativeElement.querySelector('.skeleton-loader');
    expect(skeletonLoaderElement).toBeTruthy();

    const skeletonCardElement = skeletonLoaderElement.querySelector('.skeleton-card');
    expect(skeletonCardElement).toBeTruthy();

    const skeletonTitleElement = skeletonLoaderElement.querySelector('.skeleton-title');
    expect(skeletonTitleElement).toBeTruthy();
  });

  it('should apply skeleton loader CSS classes', () => {
    const skeletonLoaderElement = fixture.nativeElement.querySelector('.skeleton-loader');
    expect(skeletonLoaderElement.classList.contains('skeleton-loader')).toBe(true);

    const skeletonCardElement = skeletonLoaderElement.querySelector('.skeleton-card');
    expect(skeletonCardElement.classList.contains('skeleton-card')).toBe(true);

    const skeletonTitleElement = skeletonLoaderElement.querySelector('.skeleton-title');
    expect(skeletonTitleElement.classList.contains('skeleton-title')).toBe(true);
  });
});
