import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteSuppliercountryComponent } from './show-delete-suppliercountry.component';

describe('ShowDeleteSuppliercountryComponent', () => {
  let component: ShowDeleteSuppliercountryComponent;
  let fixture: ComponentFixture<ShowDeleteSuppliercountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDeleteSuppliercountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteSuppliercountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
