import { Routes } from '@angular/router';
import { LatoutComponent } from './latout/latout.component';
import { HomeComponent } from './latout/home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: '',
    component: LatoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
