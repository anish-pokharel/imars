import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRejectedComponent } from './admin-rejected.component';

describe('AdminRejectedComponent', () => {
  let component: AdminRejectedComponent;
  let fixture: ComponentFixture<AdminRejectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRejectedComponent]
    });
    fixture = TestBed.createComponent(AdminRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
