import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: MainComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
