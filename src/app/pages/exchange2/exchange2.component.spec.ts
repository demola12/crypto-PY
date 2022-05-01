import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exchange2Component } from './exchange2.component';

describe('Exchange2Component', () => {
  let component: Exchange2Component;
  let fixture: ComponentFixture<Exchange2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exchange2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exchange2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
