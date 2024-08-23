import { Routes } from '@angular/router';
import { HomepageComponent } from './view/public/homepage/homepage.component';
import { VolunteerComponent } from './view/public/homepage/volunteer/volunteer.component';
import { FundingComponent } from './view/public/homepage/funding/funding.component';
import { TeamsComponent } from './view/public/teams/teams.component';
import { TeamOverviewComponent } from './view/public/teams/team-overview/team-overview.component';
import { TeamRegistrationComponent } from './view/public/teams/team-registration/team-registration.component';
import { TeamContactComponent } from './view/public/teams/team-contact/team-contact.component';
import { TeamDaysComponent } from './view/public/teams/team-days/team-days.component';
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

export const routes: Routes = [
  {
    path: 'forside',
    component: HomepageComponent,
    children: [
      { path: 'bliv-frivillig', component: VolunteerComponent },
      { path: 'funding', component: FundingComponent },
    ],
  },

  {
    path: 'om',
    component: AboutComponent,
    children: [
      { path: 'historie', component: AboutHistoryComponent },
      { path: 'team', component: AboutTeamComponent },
      { path: 'mission', component: AboutMissionComponent },
    ],
  },

  {
    path: 'hold',
    component: TeamsComponent,
    children: [
      { path: 'oversigt', component: TeamOverviewComponent },
      { path: 'tilmelding', component: TeamRegistrationComponent },
      { path: 'kontakt', component: TeamContactComponent },
      { path: 'tider', component: TeamDaysComponent },
    ],
  },

  {
    path: 'aktiviteter',
    component: ActivitiesComponent,
    children: [
      { path: 'kalender', component: ActivitiesCalendarComponent },
      { path: 'highlights', component: ActivitiesHighlightsComponent },
    ],
  },

  {
    path: 'kontakt',
    component: ContactComponent,
    children: [
      { path: 'kontaktformular', component: ContactFormComponent },
      { path: 'lokation', component: ContactCvrInfoComponent },
    ],
  },

  { path: '**', redirectTo: '' }, // Fallback route
];
