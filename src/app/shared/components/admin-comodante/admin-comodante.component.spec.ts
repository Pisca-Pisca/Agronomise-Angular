import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComodanteComponent } from './admin-comodante.component';

describe('AdminComodanteComponent', () => {
  let component: AdminComodanteComponent;
  let fixture: ComponentFixture<AdminComodanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComodanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComodanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
