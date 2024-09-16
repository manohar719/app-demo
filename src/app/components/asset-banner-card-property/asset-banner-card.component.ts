import { Component } from '@angular/core';
import { BreadcrumPropertyComponent } from '../breadcrum-property/breadcrum.component';
import { ButtonIconComponent } from '../button-icon/button-icon.component';
import { MapComponent } from '../map/map.component';
import { ButtonsModule } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-asset-banner-card-property',
  standalone: true,
  imports: [BreadcrumPropertyComponent, ButtonIconComponent, MapComponent, ButtonsModule],
  templateUrl: './asset-banner-card.component.html',
  styleUrl: './asset-banner-card.component.scss'
})
export class AssetBannerCardPropertyComponent {

}
