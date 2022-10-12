import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacaVoceMesmoComponent } from './faca-voce-mesmo.component';

describe('FacaVoceMesmoComponent', () => {
  let component: FacaVoceMesmoComponent;
  let fixture: ComponentFixture<FacaVoceMesmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacaVoceMesmoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacaVoceMesmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
