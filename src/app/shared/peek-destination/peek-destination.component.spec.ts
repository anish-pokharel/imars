import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeekDestinationComponent } from './peek-destination.component';

describe('PeekDestinationComponent', () => {
  let component: PeekDestinationComponent;
  let fixture: ComponentFixture<PeekDestinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeekDestinationComponent]
    });
    fixture = TestBed.createComponent(PeekDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
