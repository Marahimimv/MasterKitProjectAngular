import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatoutComponent } from './components/latout/latout.component';
import { RouterModule } from '@angular/router';
import { routes } from './components/router';
import { NavbarComponent } from './components/latout/navbar/navbar.component';
import { FooterComponent } from './components/latout/footer/footer.component';
import { HomeComponent } from './components/latout/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LatoutComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
