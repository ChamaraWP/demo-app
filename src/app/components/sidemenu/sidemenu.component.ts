import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.css"]
})
export class SidemenuComponent implements OnInit {
  isActive = 0;

  onListClick(index) {
    this.isActive = index;
  }

  constructor() {}

  ngOnInit() {}
}
