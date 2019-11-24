import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Observable } from "rxjs";

@Injectable()
export class UserPreferenceService {
  private isDarkTheme = new Subject<boolean>();

  IsDarkTheme: Observable<boolean> = this.isDarkTheme.asObservable();

  setDarkTheme(isDarkTheme: boolean): void {
    this.isDarkTheme.next(isDarkTheme);
  }

  constructor() {}
}
