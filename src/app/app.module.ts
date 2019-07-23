import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidemenuComponent } from "./components/sidemenu/sidemenu.component";
import { FormComponent } from "./components/form/form.component";
import { DoctorComponent } from './components/doctor/doctor.component';

@NgModule({
  declarations: [AppComponent, SidemenuComponent, FormComponent, DoctorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([{ path: '', component: FormComponent },
    { path: 'doctor', component: DoctorComponent }])
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
