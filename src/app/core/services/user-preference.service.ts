import { Injectable } from "@angular/core";
import { ThemeService } from "./theme-service/theme-service";

@Injectable({
  providedIn: "root"
})
export class UserPreferenceService {
  Theme: ThemeService;

  constructor() {
    this.Theme = new ThemeService();
  }
}
