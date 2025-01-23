import { Component } from '@angular/core';
import { TaskCardComponent } from '../../../components/task-card/task-card.component';
import { KENDO_TABSTRIP } from '@progress/kendo-angular-layout';
import { GridModule } from "@progress/kendo-angular-grid";
import { MyWork_MyTask, MyWork_Property, MyWork_TeamTask } from './mywork.model';
import { MultipleSortSettings } from "@progress/kendo-angular-grid";
import { SortDescriptor } from "@progress/kendo-data-query";
import { IconsModule } from "@progress/kendo-angular-icons";
import { SVGIcon, pencilIcon } from "@progress/kendo-svg-icons";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { FormsModule } from "@angular/forms";






@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [TaskCardComponent,KENDO_TABSTRIP,GridModule,IconsModule,ButtonsModule,InputsModule,LabelModule,FormsModule],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.scss',

})


export class MyworkComponent {

  public gridView: MyWork_Property[] = [{
    property_name: "Bella Terra",
    deal_stage: "Closed",
    asset_status: "Active",
    
  },
  {
    property_name: "Grid Cell",
    deal_stage: "Grid Cell",
    asset_status: "Grid Cell",
   
  },
  {
    property_name: "Grid Cell",
    deal_stage: "Grid Cell",
    asset_status: "Grid Cell",
   
  }];

  public gridView4: MyWork_TeamTask[] = [{
    deadline: "12/15/24",
    task: "Review New Property",
    primary_asset_manager: "James Blyth",
    secondary_asset_manager:"Richard Dean Anderson",
    property_name:"1235 Main",
    deal_stage:"Allocated",
    closed_date:"11/15/24 (est.)"

    
  },
  {
    deadline: "11/22/24",
    task: "Set Up Property",
    primary_asset_manager: "Clarissa Burns",
    secondary_asset_manager:"Larry Green",
    property_name:"Eagle Stone Landing Bridge",
    deal_stage:"Closed",
    closed_date:"10/22/24"
   
  },
  {
    deadline: "10/03/24",
    task: "Assign Asset Managers",
    primary_asset_manager: "Sue Smith",
    secondary_asset_manager:"Carol Johnson",
    property_name:"Greenbriar Hills",
    deal_stage:"Closed",
    closed_date:"9/03/24"
   
  }];



  public gridView3: MyWork_MyTask[] = [{
    deadline: "12/15/24",
    task: "Review New Property",
    action: "Review",
    property_name:"1235 Main",
    deal_stage:"Allocated",
    closed_date:"11/15/24 (est.)"

    
  },
  {
    deadline: "11/22/24",
    task: "Set Up Property",
    action: "Set Up",
    property_name:"Applegate",
    deal_stage:"Closed",
    closed_date:"10/22/24"
   
  },
  {
    deadline: "10/03/24",
    task: "Assign Asset Managers",
    action:"Assign",
    property_name:"Arcadia Mansionss",
    deal_stage:"Closed",
    closed_date:"9/03/24"
   
  }];

  
  
  public pencilIcon : SVGIcon = pencilIcon
  public radio1 = {
    layout: "Portrait",
  };

 
}
