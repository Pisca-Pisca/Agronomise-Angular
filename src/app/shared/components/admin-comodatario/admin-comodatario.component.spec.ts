import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComodatarioComponent } from './admin-comodatario.component';

describe('AdminComodatarioComponent', () => {
  let component: AdminComodatarioComponent;
  let fixture: ComponentFixture<AdminComodatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComodatarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComodatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
