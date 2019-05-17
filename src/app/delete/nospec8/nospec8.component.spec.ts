import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nospec8Component } from './nospec8.component';

describe('Nospec8Component', () => {
  let component: Nospec8Component;
  let fixture: ComponentFixture<Nospec8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nospec8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nospec8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
