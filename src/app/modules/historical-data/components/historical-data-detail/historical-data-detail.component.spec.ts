import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalDataDetailComponent } from './historical-data-detail.component';

describe('HistoricalDataDetailComponent', () => {
  let component: HistoricalDataDetailComponent;
  let fixture: ComponentFixture<HistoricalDataDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalDataDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalDataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
