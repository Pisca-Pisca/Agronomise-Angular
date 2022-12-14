/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TerrenosComponent } from './terrenos.component';

describe('TerrenosComponent', () => {
  let component: TerrenosComponent;
  let fixture: ComponentFixture<TerrenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
