import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementListingComponent } from './element-listing.component';

describe('ElementListingComponent', () => {
  let component: ElementListingComponent;
  let fixture: ComponentFixture<ElementListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementListingComponent]
    });
    fixture = TestBed.createComponent(ElementListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
