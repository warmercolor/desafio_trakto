import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ViewComponent } from './view.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FrameComponent } from 'src/app/components/frame/frame.component';
import { MatMenuModule } from '@angular/material/menu';
import { SkeletonComponent } from 'src/app/components/skeleton/skeleton.component';
import { ServiceTrakto } from 'src/app/resources/service/api.service';
import { CardComponent } from 'src/app/components/card/card.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
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
      imports: [
        HttpClientTestingModule,
        MatMenuModule
      ],
      declarations: [
        ViewComponent,
        HeaderComponent,
        FrameComponent,
        CardComponent,
        SkeletonComponent
      ],
      providers: [ServiceTrakto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    serviceTrakto = TestBed.inject(ServiceTrakto);
    spyOn(serviceTrakto, 'SlideAll').and.returnValue(of(mockResponse));
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should be loading initially', () => {
    expect(component.isLoading).toBeTrue();
  });

  it('should call SlideAll on ngOnInit', () => {
    fixture.detectChanges();
    component.ngOnInit();
    expect(serviceTrakto.SlideAll).toHaveBeenCalled();
  });

  it('should set isLoading to false after data is loaded', () => {
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.isLoading).toBeFalse();
  });

  it('should map response data to cards', () => {
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.cards).toEqual(expectedData);
  });

  it('should render HeaderComponent', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
  });

  it('should render CardComponent when isLoading is false', () => {
    component.isLoading = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-card')).toBeTruthy();
  });
});
