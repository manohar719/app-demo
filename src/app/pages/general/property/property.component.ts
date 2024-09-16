import { Component } from '@angular/core';
import { BreadcrumPropertyComponent } from '../../../components/breadcrum-property/breadcrum.component'
import { SectionHeaderPropertyComponent } from '../../../components/section-header-property/section-header.component';
import { EntityCardComponent } from '../../../components/entity-card/entity-card.component';
import { AssetBannerCardPropertyComponent } from '../../../components/asset-banner-card-property/asset-banner-card.component';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [BreadcrumPropertyComponent, SectionHeaderPropertyComponent, EntityCardComponent, AssetBannerCardPropertyComponent],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})
export class PropertyComponent {

}
