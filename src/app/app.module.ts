import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidemenuComponent } from "./components/sidemenu/sidemenu.component";
import { FormComponent } from "./components/form/form.component";
import { DoctorComponent } from "./components/doctor/doctor.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProceduresComponent } from "./components/procedures/procedures.component";

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    FormComponent,
    DoctorComponent,
    ProceduresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: FormComponent },
      { path: "doctor", component: DoctorComponent },
      { path: "procedures", component: ProceduresComponent }
    ])
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
