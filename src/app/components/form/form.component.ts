import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  @ViewChild("mealType", { static: false }) mealType;

  phoneNumberRegex = "^(\\+\\d{1,3}[- ]?)?\\d{10}$";

  notes = ["$ US dollars", "Rs Sri Lankan Rupees", "£ British pound "];

  images = [
    {
      name: "1",
      path: ".../../assets/1.jpg"
    },
    {
      name: "2",
      path: ".../../assets/2.jpg"
    },
    {
      name: "3",
      path: ".../../assets/3.jpg"
    },
    {
      name: "4",
      path: ".../../assets/4.jpg"
    },
    {
      name: "5",
      path: ".../../assets/5.jpg"
    },
    {
      name: "6",
      path: ".../../assets/6.jpg"
    }
  ];

  form = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email,
      Validators.minLength(8)
    ]),
    contactNumber: new FormControl("", [
      Validators.required,
      Validators.pattern(this.phoneNumberRegex)
    ]),
    websiteUrl: new FormControl("", [Validators.required]),
    highlight1: new FormControl("", [
      Validators.required,
      Validators.maxLength(100)
    ]),
    description: new FormControl("", [
      Validators.required,
      Validators.maxLength(300)
    ]),
    currency: new FormControl("", [Validators.required]),
    mealName: new FormArray([new FormControl(this.mealType)])
  });

  get email() {
    return this.form.get("email");
  }

  get contactNumber() {
    return this.form.get("contactNumber");
  }

  get websiteUrl() {
    return this.form.get("websiteUrl");
  }

  get description() {
    return this.form.get("description");
  }

  get currency() {
    return this.form.get("currency");
  }

  constructor() {}
  // tslint:disable-next-line:align
  ngOnInit() {}

  removePhoto(index) {
    this.images.splice(index, 1);
  }

  addMealType(mealType: HTMLDivElement) {
    (this.form.get("mealName") as FormArray).push(new FormControl(mealType));
  }

  removeMealType(index) {
    (this.form.get("mealName") as FormArray).removeAt(index);
  }

  submitUserData() {
    if (!this.form.valid) {
      this.form.setErrors({
        invalidForm: true
      });
      return;
    } else {
      console.log(this.form.value);
      this.form.reset();
    }
  }
}
