import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { AngularMaterialModule } from "./Shared/angular-material/angular-material.module";
import { SideNavModule } from "./modules/side-nav/side-nav.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        AngularMaterialModule,
        SideNavModule,
        NoopAnimationsModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Ng-Material-FaceAI'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Ng-Material-FaceAI");
  });
});
