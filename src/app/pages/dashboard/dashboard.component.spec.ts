import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { ServiceTrakto } from 'src/app/resources/service/api.service';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let serviceTrakto: ServiceTrakto;

  const mockData = [
    {
      id: '1',
      thumbs: {
        raw: 'test',
      },
      title: 'test',
    },
  ];

  const expectedData = mockData.map(card => ({
    id: card.id,
    imageSrc: card.thumbs.raw,
    subtitle: card.title,
  }));

  const mockResponse = {
    data: mockData
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientModule],
      declarations: [
        DashboardComponent,
        BannerComponent,
      ],
      providers: [ServiceTrakto]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    serviceTrakto = TestBed.inject(ServiceTrakto);
    spyOn(serviceTrakto, 'SlideAll').and.returnValue(of(mockResponse));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move cardWrapper scroll position left on moveLeft', () => {
    component.cardWrapper = { nativeElement: { scrollLeft: 100 } } as any;
    const initialScrollLeft = component.cardWrapper.nativeElement.scrollLeft;
    component.moveLeft();
    expect(component.cardWrapper.nativeElement.scrollLeft).toBeLessThan(initialScrollLeft);
  });

  it('should move cardWrapper scroll position right on moveRight', () => {
    component.cardWrapper = { nativeElement: { scrollLeft: 100 } } as any;
    const initialScrollLeft = component.cardWrapper.nativeElement.scrollLeft;
    component.moveRight();
    expect(component.cardWrapper.nativeElement.scrollLeft).toBeGreaterThan(initialScrollLeft);
  });

  it('should call SlideAll on ngOnInit', () => {
    component.ngOnInit();
    expect(serviceTrakto.SlideAll).toHaveBeenCalled();
  });

  it('should map response data to cards', () => {
    component.ngOnInit();
    expect(component.cards).toEqual(expectedData);
  });

  it('should set isLoading to false after data is loaded', () => {
    component.ngOnInit();
    expect(component.isLoading).toBeFalse();
  });
});
