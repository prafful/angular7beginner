import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nospec6Component } from './nospec6.component';

describe('Nospec6Component', () => {
  let component: Nospec6Component;
  let fixture: ComponentFixture<Nospec6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nospec6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nospec6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
