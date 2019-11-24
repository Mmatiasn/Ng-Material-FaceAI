import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "src/app/Shared/angular-material/angular-material.module";
import { SideNavComponent } from "./side-nav.component";
import { LayoutModule } from "@angular/cdk/layout";

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule, LayoutModule],
  exports: [SideNavComponent],
  entryComponents: [SideNavComponent]
})
export class SideNavModule {}
