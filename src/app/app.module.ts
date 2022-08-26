import { MatModule } from './appModules/mat/mat.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MainComponent } from './includes/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './includes/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchpatientComponent } from './includes/searchpatient/searchpatient.component';
import { BatchtrackingComponent } from './includes/batchtracking/batchtracking.component';
import { LogoutComponent } from './includes/logout/logout.component';
import { PatientRegisterComponent } from './pages/patient-register/patient-register.component';
import { SearchPatientComponent } from './pages/search-patient/search-patient.component';
import { AppoinmentComponent } from './includes/appoinment/appoinment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SearchpatientComponent,
    BatchtrackingComponent,
    LogoutComponent,
    PatientRegisterComponent,
    SearchPatientComponent,
    AppoinmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
