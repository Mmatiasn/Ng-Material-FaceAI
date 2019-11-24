import { NgModule } from "@angular/core";
import { UserPreferenceService } from "./services/user-preference.service";
import { StoreModule } from "./store/store.module";

@NgModule({
  declarations: [],
  imports: [StoreModule],
  exports: [StoreModule],
  providers: [UserPreferenceService]
})
export class CoreModule {}
