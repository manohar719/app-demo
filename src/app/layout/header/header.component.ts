import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { gridIcon, SVGIcon, arrowRightIcon, searchIcon } from "@progress/kendo-svg-icons";
import { searchSuggestion } from "./model";
import { GroupResult, groupBy } from "@progress/kendo-data-query";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  constructor(public router: Router) {}
  public logo : SVGIcon = gridIcon
  public arrowRight : SVGIcon = arrowRightIcon
  public searchIcon : SVGIcon = searchIcon

  public groupedData: GroupResult[] = groupBy(searchSuggestion, [
    { field: "subcategory" },
  ]) as GroupResult[];

}
