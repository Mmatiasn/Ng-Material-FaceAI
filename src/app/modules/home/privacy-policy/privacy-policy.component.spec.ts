import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PrivacyPolicyComponent } from "./privacy-policy.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "../../../Shared/angular-material/angular-material.module";

describe("PrivacyPolicyComponent", () => {
  let component: PrivacyPolicyComponent;
  let fixture: ComponentFixture<PrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyPolicyComponent],
      imports: [NoopAnimationsModule, AngularMaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
