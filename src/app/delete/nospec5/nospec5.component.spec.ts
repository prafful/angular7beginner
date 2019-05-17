import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nospec5Component } from './nospec5.component';

describe('Nospec5Component', () => {
  let component: Nospec5Component;
  let fixture: ComponentFixture<Nospec5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nospec5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nospec5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
