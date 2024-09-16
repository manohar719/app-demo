import { Component } from '@angular/core';
import { BreadcrumComponent } from '../../../components/breadcrum/breadcrum.component'
import { SectionHeaderComponent } from '../../../components/section-header/section-header.component';
import { EntityCardComponent } from '../../../components/entity-card/entity-card.component';
import { AssetBannerCardComponent } from '../../../components/asset-banner-card/asset-banner-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BreadcrumComponent, SectionHeaderComponent, EntityCardComponent, AssetBannerCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
