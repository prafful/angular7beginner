import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nospec9Component } from './nospec9.component';

describe('Nospec9Component', () => {
  let component: Nospec9Component;
  let fixture: ComponentFixture<Nospec9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nospec9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nospec9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
