import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SideNavModule } from "./modules/side-nav/side-nav.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    SideNavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  entryComponents: [AppComponent]
})
export class AppModule {}
