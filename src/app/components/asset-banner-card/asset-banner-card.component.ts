import { Component } from '@angular/core';
import { BreadcrumComponent } from '../breadcrum/breadcrum.component';
import { ButtonIconComponent } from '../button-icon/button-icon.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-asset-banner-card',
  standalone: true,
  imports: [BreadcrumComponent, ButtonIconComponent, MapComponent],
  templateUrl: './asset-banner-card.component.html',
  styleUrl: './asset-banner-card.component.scss'
})
export class AssetBannerCardComponent {

}
