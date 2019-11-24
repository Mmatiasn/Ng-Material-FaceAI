import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { environment } from "../../../environments/environment";

@NgModule({
  imports: [
    NgxsModule.forRoot([], { developmentMode: !environment.production })
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ]
})
export class StoreModule {}
