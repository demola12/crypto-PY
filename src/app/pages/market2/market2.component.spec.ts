import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Market2Component } from './market2.component';

describe('Market2Component', () => {
  let component: Market2Component;
  let fixture: ComponentFixture<Market2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Market2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Market2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
