import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumComponent } from './breadcrum.component';

describe('BreadcrumComponent', () => {
  let component: BreadcrumComponent;
  let fixture: ComponentFixture<BreadcrumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
