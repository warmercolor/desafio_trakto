import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { FrameComponent } from 'src/app/components/frame/frame.component';
import { ButtonFrameComponent } from 'src/app/components/button-frame/button-frame.component';
import { SkeletonComponent } from 'src/app/components/skeleton/skeleton.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientModule],
      declarations: [
        DashboardComponent,
        BannerComponent,
        FrameComponent,
        ButtonFrameComponent,
        SkeletonComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
