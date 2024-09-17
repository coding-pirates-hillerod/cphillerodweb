import { Routes } from '@angular/router';
import { HomepageComponent } from './view/public/homepage/homepage.component';
import { VolunteerComponent } from './view/public/homepage/volunteer/volunteer.component';
import { FundingComponent } from './view/public/homepage/funding/funding.component';
import { TeamsComponent } from './view/public/teams/teams.component';
import { TeamOverviewComponent } from './view/public/teams/team-overview/team-overview.component';
import { TeamRegistrationComponent } from './view/public/teams/team-registration/team-registration.component';
import { AboutComponent } from './view/public/about/about.component';
import { AboutHistoryComponent } from './view/public/about/about-history/about-history.component';
import { AboutTeamComponent } from './view/public/about/about-team/about-team.component';
import { AboutMissionComponent } from './view/public/about/about-mission/about-mission.component';
import { ActivitiesComponent } from './view/public/activities/activities.component';
import { ActivitiesCalendarComponent } from './view/public/activities/activities-calendar/activities-calendar.component';
import { ActivitiesHighlightsComponent } from './view/public/activities/activities-highlights/activities-highlights.component';
import { ContactComponent } from './view/public/contact/contact.component';
import { ContactFormComponent } from './view/public/contact/contact-form/contact-form.component';
import { ContactCvrInfoComponent } from './view/public/contact/contact-cvr-info/contact-cvr-info.component';
import { HandbookComponent } from './view/public/teams/handbook/handbook.component';

export const routes: Routes = [
  // Forside and its sub-routes as standalone routes
  { path: 'forside', component: HomepageComponent },
  { path: 'forside/bliv-frivillig', component: VolunteerComponent },
  { path: 'forside/funding', component: FundingComponent },

  // Om and its sub-routes as standalone routes
  { path: 'om', component: AboutComponent },
  { path: 'om/historie', component: AboutHistoryComponent },
  { path: 'om/team', component: AboutTeamComponent },
  { path: 'om/mission', component: AboutMissionComponent },

  // Hold and its sub-routes as standalone routes
  { path: 'hold', component: TeamsComponent },
  { path: 'hold/oversigt', component: TeamOverviewComponent },
  { path: 'hold/tilmelding', component: TeamRegistrationComponent },
  { path: 'hold/haandbog', component: HandbookComponent },

  // Aktiviteter and its sub-routes as standalone routes
  { path: 'aktiviteter', component: ActivitiesComponent },
  { path: 'aktiviteter/kalender', component: ActivitiesCalendarComponent },
  { path: 'aktiviteter/highlights', component: ActivitiesHighlightsComponent },

  // Kontakt and its sub-routes as standalone routes
  { path: 'kontakt', component: ContactComponent },
  { path: 'kontakt/kontaktformular', component: ContactFormComponent },
  { path: 'kontakt/lokation', component: ContactCvrInfoComponent },

  // Fallback route
  { path: '**', redirectTo: 'forside' }, // Redirects any unknown paths to 'forside'
];
