import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
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

  constructor() {}
  // tslint:disable-next-line:align
  ngOnInit() {}
}
