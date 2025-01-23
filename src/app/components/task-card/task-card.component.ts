import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { AssetOnboardingCardComponent } from '../asset-onboarding-card/asset-onboarding-card.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule, LayoutModule, AssetOnboardingCardComponent],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  lists = [{
    title: "My Task",
    count: 3,
    countLable : "1 NEW",
    colorClass : "color-yellow",
  },
  {
    title: "Team Task",
    count: 3,
    countLable : "1 OVERDUE",
    colorClass : "color-red",
  }
]
}
