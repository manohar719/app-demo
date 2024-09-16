import { Component } from '@angular/core';
import { IconsModule } from "@progress/kendo-angular-icons";
import { homeIcon, SVGIcon, pencilIcon } from "@progress/kendo-svg-icons";
import { ButtonsModule } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-entity-card-building',
  standalone: true,
  imports: [IconsModule, ButtonsModule],
  templateUrl: './entity-card.component.html',
  styleUrl: './entity-card.component.scss'
})
export class EntityCardBuildingComponent {
  public homeIcon : SVGIcon = homeIcon
  public pencilIcon : SVGIcon = pencilIcon
}
