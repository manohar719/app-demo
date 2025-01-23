import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LayoutModule } from "@progress/kendo-angular-layout";

@Component({
  selector: 'asset-onboarding-card',
  standalone: true,
  imports: [CommonModule, LayoutModule],
  templateUrl: './asset-onboarding-card.component.html',
  styleUrl: './asset-onboarding-card.component.scss'
})
export class AssetOnboardingCardComponent {

}
