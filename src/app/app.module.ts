import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { routing } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PhotographComponent } from './components/photograph/photograph.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { EventsComponent } from './components/events/events.component';
import { PhotographIAComponent } from './components/photograph-ia/photograph-ia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent,
    PhotographComponent,
    SubscriptionComponent,
    EventsComponent,
    PhotographIAComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
