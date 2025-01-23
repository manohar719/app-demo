import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTreeComponent } from './asset-tree.component';

describe('AssetTreeComponent', () => {
  let component: AssetTreeComponent;
  let fixture: ComponentFixture<AssetTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
