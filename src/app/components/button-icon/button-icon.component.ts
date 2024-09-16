import { Component } from '@angular/core';
import { pencilIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { ButtonsModule } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-button-icon',
  standalone: true,
  imports: [ButtonsModule],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.scss'
})
export class ButtonIconComponent {

  public pencilIcon: SVGIcon = pencilIcon;
}
