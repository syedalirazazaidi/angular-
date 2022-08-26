import { SearchPatientComponent } from './pages/search-patient/search-patient.component';
import { PatientRegisterComponent } from './pages/patient-register/patient-register.component';
import { HomeComponent } from './pages/home/home.component';
// import { HeaderComponent } from './includes/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registerpatient', component: PatientRegisterComponent },
  { path: 'searchpatient', component: SearchPatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
