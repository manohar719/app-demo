import { Component } from '@angular/core';
import { fileExcelIcon, SVGIcon, tableIcon, listOrderedIcon } from '@progress/kendo-svg-icons';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { EntityCardComponent } from '../entity-card/entity-card.component';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [ButtonsModule, EntityCardComponent],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  public exportIcon: SVGIcon = fileExcelIcon;
  public tableIcon: SVGIcon = tableIcon;
  public listOrderIcon: SVGIcon = listOrderedIcon;

}
