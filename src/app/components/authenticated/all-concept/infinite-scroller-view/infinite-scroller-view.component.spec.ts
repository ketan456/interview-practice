import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollerViewComponent } from './infinite-scroller-view.component';

describe('InfiniteScrollerViewComponent', () => {
  let component: InfiniteScrollerViewComponent;
  let fixture: ComponentFixture<InfiniteScrollerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfiniteScrollerViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfiniteScrollerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
