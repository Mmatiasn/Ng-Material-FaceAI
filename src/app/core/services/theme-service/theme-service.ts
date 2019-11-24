import { Subject } from "rxjs/internal/Subject";

export class ThemeService {
  private darkTheme = new Subject<boolean>();
  IsDarkTheme = this.darkTheme.asObservable();

  SetDarkTheme(isDarkTheme: boolean): void {
    this.darkTheme.next(isDarkTheme);
  }
}
