import { TestBed } from "@angular/core/testing";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

import { UserPreferenceService } from "./user-preference.service";

describe("UserPreferenceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: UserPreferenceService = TestBed.get(UserPreferenceService);
    expect(service).toBeTruthy();
  });

  it("child theme service should be initialized", () => {
    const service: UserPreferenceService = TestBed.get(UserPreferenceService);
    console.log(service.Theme);
    expect(service.Theme).toBeTruthy();
  });

  // it("child theme service IsDarkTheme value to true", () => {
  //   const service: UserPreferenceService = TestBed.get(UserPreferenceService);
  //   const isDarkTheme: BehaviorSubject<boolean> = service.Theme.IsDarkTheme;
  //
  //   isDarkTheme.next(true);
  //   isDarkTheme.subscribe(data => expect(data).toBeTruthy());
  //   isDarkTheme.unsubscribe();
  // });
  //
  // it("child theme service IsDarkTheme value to false", () => {
  //   const service: UserPreferenceService = TestBed.get(UserPreferenceService);
  //   const isDarkTheme: BehaviorSubject<boolean> = service.Theme.IsDarkTheme;
  //
  //   isDarkTheme.next(false);
  //   isDarkTheme.subscribe(data => expect(data).toBeFalsy());
  //   isDarkTheme.unsubscribe();
  // });
  //
  // it("child theme service IsDarkTheme value to undefined", () => {
  //   const service: UserPreferenceService = TestBed.get(UserPreferenceService);
  //   const isDarkTheme: BehaviorSubject<boolean> = service.Theme.IsDarkTheme;
  //
  //   isDarkTheme.next(undefined);
  //   isDarkTheme.subscribe(data => expect(data).toBeFalsy());
  //   isDarkTheme.unsubscribe();
  // });
  //
  // it("child theme service IsDarkTheme is a BehaviorSubject<boolean>", () => {
  //   const service: UserPreferenceService = TestBed.get(UserPreferenceService);
  //   const isDarkTheme: BehaviorSubject<boolean> = service.Theme.IsDarkTheme;
  //
  //   isDarkTheme.next(undefined);
  //   isDarkTheme.subscribe(data => expect(data).toBeFalsy());
  //   isDarkTheme.unsubscribe();
  // });
});
