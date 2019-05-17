import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flatcomponent3Component } from './flatcomponent3.component';

describe('Flatcomponent3Component', () => {
  let component: Flatcomponent3Component;
  let fixture: ComponentFixture<Flatcomponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flatcomponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flatcomponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
