import { Component, ViewEncapsulation } from '@angular/core';
import {
  gridIcon,
  SVGIcon,
  groupIcon,
  mapMarkerTargetIcon,
  filmIcon,
  pencilIcon,
  xCircleIcon,
  tableDeleteIcon
} from '@progress/kendo-svg-icons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { ButtonsModule } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'asset-tree',
  standalone: true,
  imports: [KENDO_ICONS, ButtonsModule],
  templateUrl: './asset-tree.component.html',
  styleUrl: './asset-tree.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AssetTreeComponent {
  public assetIcon: SVGIcon = groupIcon;
  public propertyIcon: SVGIcon = mapMarkerTargetIcon;
  public buildingIcon: SVGIcon = filmIcon;
  public pencilIcon : SVGIcon = pencilIcon
  public deleteIcon : SVGIcon = xCircleIcon

  public assetTreeObject = [
    {
      id: 1,
      name: 'Bella Terra',
      type: 'asset',
      icon: 'asset',
      isEditable: true,
      isDeletable: false,
      buttons: [{ id: 1, label: 'Add Debt Entitle', icon: 'Add' }],
      nodes: [
        {
          id: 1,
          name: 'Bella Terra Property',
          type: 'property',
          icon: 'map',
          isEditable: true,
          isDeletable: false,
          buttons: [
              { id: 1, label: 'Add Building', icon: 'Add' },
              { id: 2, label: 'Add Land', icon: 'Add' },
          ],
          nodes: [
            {
              id: 1,
              name: 'Building 1',
              type: 'building',
              icon: 'home',
              isEditable: true,
              isDeletable: true,
              buttons: [],
            },
            {
              id: 2,
              name: 'Building 2',
              type: 'building',
              icon: 'home',
              isEditable: true,
              isDeletable: true,
              buttons: [],
            },
            {
              id: 3,
              name: 'Land Parcel Name 1',
              type: 'land',
              icon: 'land',
              isEditable: true,
              isDeletable: true,
              buttons: [],
            },
            {
              id: 4,
              name: 'Land Parcel Name 2',
              type: 'land',
              icon: 'land',
              isEditable: true,
              isDeletable: true,
              buttons: [],
            },
          ],
        },
        {
          id: 1,
          name: 'Bella Terra Costco',
          type: 'property',
          icon: 'map',
          isEditable: true,
          isDeletable: false,
          buttons: [
            { id: 1, label: 'Add Building', icon: 'Add' },
            { id: 2, label: 'Add Land', icon: 'Add' },
          ],
          nodes: [
            {
              id: 1,
              name: 'Building 1',
              type: 'building',
              icon: 'home',
              isEditable: true,
              isDeletable: true,
              buttons: [],
            },
            {
              id: 2,
              name: 'Building 2',
              type: 'building',
              icon: 'home',
              isEditable: true,
              isDeletable: true,
              buttons: [],
            },
          ],
        },
      ],
    },
  ];
}
