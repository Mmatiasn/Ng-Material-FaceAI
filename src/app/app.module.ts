import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./Shared/angular-material/angular-material.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SideNavModule } from "./modules/side-nav/side-nav.module";
import { LayoutModule } from "@angular/cdk/layout";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SideNavModule,
    AngularMaterialModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  entryComponents: []
})
export class AppModule {}
