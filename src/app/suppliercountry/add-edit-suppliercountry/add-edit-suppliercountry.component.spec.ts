import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSuppliercountryComponent } from './add-edit-suppliercountry.component';

describe('AddEditSuppliercountryComponent', () => {
  let component: AddEditSuppliercountryComponent;
  let fixture: ComponentFixture<AddEditSuppliercountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSuppliercountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSuppliercountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
