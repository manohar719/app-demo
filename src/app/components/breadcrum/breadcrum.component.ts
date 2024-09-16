import { Component } from '@angular/core';
import { IconsModule } from "@progress/kendo-angular-icons";
import { layout2By2Icon, SVGIcon } from "@progress/kendo-svg-icons";

@Component({
  selector: 'app-breadcrum',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './breadcrum.component.html',
  styleUrl: './breadcrum.component.scss'
})
export class BreadcrumComponent {
  public layoutIcon : SVGIcon = layout2By2Icon
}
