import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NepaldstinationsComponent } from './nepaldstinations.component';

describe('NepaldstinationsComponent', () => {
  let component: NepaldstinationsComponent;
  let fixture: ComponentFixture<NepaldstinationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NepaldstinationsComponent]
    });
    fixture = TestBed.createComponent(NepaldstinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
