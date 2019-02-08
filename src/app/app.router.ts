import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { EventsComponent } from './events/events.component';

const APP_ROUTES: Routes = [
    {path: "home", component: HomeContentComponent},
    {path: "events", component: EventsComponent},
    {path: "**", pathMatch: "full", redirectTo: "home"}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);