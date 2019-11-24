import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AngularMaterialModule } from "../../Shared/angular-material/angular-material.module";
import { SideNavComponent } from "./side-nav.component";
import { HomeModule } from "../home/home.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";

describe("SideNavComponent", () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavComponent],
      imports: [
        AngularMaterialModule,
        NoopAnimationsModule,
        RouterTestingModule,
        HomeModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
