import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nospec4Component } from './nospec4.component';

describe('Nospec4Component', () => {
  let component: Nospec4Component;
  let fixture: ComponentFixture<Nospec4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nospec4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nospec4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
