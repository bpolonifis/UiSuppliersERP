import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliercountryComponent } from './suppliercountry.component';

describe('SuppliercountryComponent', () => {
  let component: SuppliercountryComponent;
  let fixture: ComponentFixture<SuppliercountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliercountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliercountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
