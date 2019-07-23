import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidemenuComponent } from "./components/sidemenu/sidemenu.component";
import { FormComponent } from "./components/form/form.component";

@NgModule({
  declarations: [AppComponent, SidemenuComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([{ path: "", component: AppComponent }])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
