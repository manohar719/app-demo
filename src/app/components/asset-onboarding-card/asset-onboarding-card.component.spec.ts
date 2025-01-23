import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetOnboardingCardComponent } from './asset-onboarding-card.component';

describe('AssetOnboardingCardComponent', () => {
  let component: AssetOnboardingCardComponent;
  let fixture: ComponentFixture<AssetOnboardingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetOnboardingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetOnboardingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
