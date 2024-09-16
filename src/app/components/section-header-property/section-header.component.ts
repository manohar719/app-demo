import { Component } from '@angular/core';
import { fileExcelIcon, SVGIcon, tableIcon, listOrderedIcon, envelopIcon } from '@progress/kendo-svg-icons';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { EntityCardBuildingComponent } from '../entity-card-building/entity-card.component';
import { IconsModule } from "@progress/kendo-angular-icons";
import { LayoutModule } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-section-header-property',
  standalone: true,
  imports: [ButtonsModule, EntityCardBuildingComponent, IconsModule, LayoutModule],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderPropertyComponent {
  public exportIcon: SVGIcon = fileExcelIcon;
  public tableIcon: SVGIcon = tableIcon;
  public listOrderIcon: SVGIcon = listOrderedIcon;
  public envelopIcon : SVGIcon = envelopIcon;
}
