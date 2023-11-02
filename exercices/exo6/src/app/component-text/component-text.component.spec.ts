import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTextComponent } from './component-text.component';

describe('ComponentTextComponent', () => {
  let component: ComponentTextComponent;
  let fixture: ComponentFixture<ComponentTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentTextComponent]
    });
    fixture = TestBed.createComponent(ComponentTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
