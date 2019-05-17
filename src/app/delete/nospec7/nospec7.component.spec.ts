import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nospec7Component } from './nospec7.component';

describe('Nospec7Component', () => {
  let component: Nospec7Component;
  let fixture: ComponentFixture<Nospec7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nospec7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nospec7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
