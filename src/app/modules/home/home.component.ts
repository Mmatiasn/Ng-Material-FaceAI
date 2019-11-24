import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    const setNewStep = index;
    this.step = setNewStep;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor(private router: Router) {
    console.log(this.router);
  }

  ngOnInit() {}
}
