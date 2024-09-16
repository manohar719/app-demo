import { Component } from '@angular/core';
import { IconsModule } from "@progress/kendo-angular-icons";
import { folderAddIcon, SVGIcon, pencilIcon } from "@progress/kendo-svg-icons";
import { ButtonsModule } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-entity-card',
  standalone: true,
  imports: [IconsModule, ButtonsModule],
  templateUrl: './entity-card.component.html',
  styleUrl: './entity-card.component.scss'
})
export class EntityCardComponent {
  public folderAddIcon : SVGIcon = folderAddIcon
  public pencilIcon : SVGIcon = pencilIcon
}
