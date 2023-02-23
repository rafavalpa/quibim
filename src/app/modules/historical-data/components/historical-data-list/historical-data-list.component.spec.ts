import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalDataListComponent } from './historical-data-list.component';

describe('HistoricalDataListComponent', () => {
  let component: HistoricalDataListComponent;
  let fixture: ComponentFixture<HistoricalDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
