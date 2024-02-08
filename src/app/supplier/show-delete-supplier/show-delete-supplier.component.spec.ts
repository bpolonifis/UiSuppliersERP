import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteSupplierComponent } from './show-delete-supplier.component';

describe('ShowDeleteSupplierComponent', () => {
  let component: ShowDeleteSupplierComponent;
  let fixture: ComponentFixture<ShowDeleteSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDeleteSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
