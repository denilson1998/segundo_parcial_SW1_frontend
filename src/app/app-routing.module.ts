import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { PhotographComponent } from "./components/photograph/photograph.component";
import { SubscriptionComponent } from "./components/subscription/subscription.component";
import { EventsComponent } from "./components/events/events.component";
import { PhotographIAComponent } from "./components/photograph-ia/photograph-ia.component";

const routes: Routes = [
    {path: '', redirectTo:'/login' , pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'photographs', component: PhotographComponent},
    {path: 'subscription', component: SubscriptionComponent},
    {path: 'eventsList', component: EventsComponent},
    {path: 'photographsIA', component: PhotographIAComponent},
    {path: '**', redirectTo:'/login', pathMatch:'full'}
];

export const routing = RouterModule.forRoot(routes);