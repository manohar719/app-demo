import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetBannerCardComponent } from './asset-banner-card.component';

describe('AssetBannerCardComponent', () => {
  let component: AssetBannerCardComponent;
  let fixture: ComponentFixture<AssetBannerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetBannerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetBannerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
