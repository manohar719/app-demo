import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app.routes";

import { LayoutModule } from "@progress/kendo-angular-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IconsModule } from "@progress/kendo-angular-icons";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";


import {
  GridModule,
  PDFModule,
  ExcelModule,
  DataBindingDirective
} from "@progress/kendo-angular-grid";


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        IconsModule,
        InputsModule,
        LabelModule,
        ButtonsModule,
        DropDownsModule,
        GridModule,
        InputsModule,
        PDFModule,
        ExcelModule,
        AppRoutingModule,
        DataBindingDirective
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
