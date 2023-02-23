import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalDataListVisualSelectorComponent } from './historical-data-list-visual-selector.component';

describe('HistoricalDataListVisualSelectorComponent', () => {
  let component: HistoricalDataListVisualSelectorComponent;
  let fixture: ComponentFixture<HistoricalDataListVisualSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalDataListVisualSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalDataListVisualSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
