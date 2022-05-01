import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectbComponent } from './selectb.component';

describe('SelectbComponent', () => {
  let component: SelectbComponent;
  let fixture: ComponentFixture<SelectbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
