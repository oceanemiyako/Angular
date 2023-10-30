import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAnimalComponent } from './component-animal.component';

describe('ComponentAnimalComponent', () => {
  let component: ComponentAnimalComponent;
  let fixture: ComponentFixture<ComponentAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentAnimalComponent]
    });
    fixture = TestBed.createComponent(ComponentAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
