import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteSuppliercategoryComponent } from './show-delete-suppliercategory.component';

describe('ShowDeleteSuppliercategoryComponent', () => {
  let component: ShowDeleteSuppliercategoryComponent;
  let fixture: ComponentFixture<ShowDeleteSuppliercategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDeleteSuppliercategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteSuppliercategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
