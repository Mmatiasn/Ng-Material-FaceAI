import { NgModule } from "@angular/core";

import { AngularMaterialModule } from "src/app/Shared/angular-material/angular-material.module";
import { SideNavRoutingModule } from "./side-nav-routing.module";
import { SideNavComponent } from "./side-nav.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    AngularMaterialModule,
    SideNavRoutingModule
  ],
  exports: [SideNavComponent],
  providers: [],
  entryComponents: [SideNavComponent],
  bootstrap: [SideNavComponent]
})
export class SideNavModule {}
