import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSuppliercategoryComponent } from './add-edit-suppliercategory.component';

describe('AddEditSuppliercategoryComponent', () => {
  let component: AddEditSuppliercategoryComponent;
  let fixture: ComponentFixture<AddEditSuppliercategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSuppliercategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSuppliercategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
