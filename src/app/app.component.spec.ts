import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';

describe('AppModule', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule]
  }));

  it('should create', () => {
    const appModule = TestBed.inject(AppModule);
    expect(appModule).toBeTruthy();
  });
});
