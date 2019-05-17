import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flatcomponent4Component } from './flatcomponent4.component';

describe('Flatcomponent4Component', () => {
  let component: Flatcomponent4Component;
  let fixture: ComponentFixture<Flatcomponent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flatcomponent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flatcomponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
