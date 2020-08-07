import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Persona4Component } from './persona4.component';

describe('Persona4Component', () => {
  let component: Persona4Component;
  let fixture: ComponentFixture<Persona4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Persona4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Persona4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
