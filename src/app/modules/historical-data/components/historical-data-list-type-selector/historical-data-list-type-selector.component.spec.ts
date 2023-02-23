import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalDataListTypeSelectorComponent } from './historical-data-list-type-selector.component';

describe('HistoricalDataListTypeSelectorComponent', () => {
  let component: HistoricalDataListTypeSelectorComponent;
  let fixture: ComponentFixture<HistoricalDataListTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalDataListTypeSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalDataListTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
