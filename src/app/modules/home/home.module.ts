import { NgModule } from "@angular/core";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AngularMaterialModule } from "../../Shared/angular-material/angular-material.module";
import { StatisticsComponent } from "./statistics/statistics.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    StatisticsComponent,
    PrivacyPolicyComponent
  ],
  imports: [CommonModule, AngularMaterialModule, HomeRoutingModule],
  exports: [],
  entryComponents: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule {}
