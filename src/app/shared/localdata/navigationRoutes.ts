import { NavigationRoute } from '../models/navigationRoutesModels';

export const navigationRoutes: NavigationRoute[] = [
  {
    title: 'Forside',
    route: 'forside',
    icon: 'home', // Home icon
    subRoutes: [
      { title: 'Bliv Frivillig', route: 'forside/bliv-frivillig' },
      { title: 'Funding', route: 'forside/funding' },
    ],
  },
  {
    title: 'Om os',
    route: 'om',
    icon: 'info', // Info icon
    subRoutes: [
      { title: 'Historie', route: 'om/historie' },
      { title: 'Team', route: 'om/team' },
      { title: 'Mission', route: 'om/mission' },
    ],
  },
  {
    title: 'Aktiviteter',
    route: 'aktiviteter',
    icon: 'event', // Event icon
    subRoutes: [
      { title: 'Kalender', route: 'aktiviteter/kalender' },
      { title: 'Highlights', route: 'aktiviteter/highlights' },
    ],
  },
  {
    title: 'Kontakt',
    route: 'kontakt',
    icon: 'contact_mail', // Contact mail icon
    subRoutes: [
      { title: 'Kontaktformular', route: 'kontakt/kontaktformular' },
      { title: 'Lokation', route: 'kontakt/lokation' },
    ],
  },
  {
    title: 'Hold',
    route: 'hold',
    icon: 'groups', // Groups icon
    subRoutes: [
      { title: 'Oversigt', route: 'hold/oversigt' },
      { title: 'Tilmelding', route: 'hold/tilmelding' },
      { title: 'Kontakt', route: 'hold/kontakt' },
      { title: 'Tider', route: 'hold/tider' },
    ],
  },
];
