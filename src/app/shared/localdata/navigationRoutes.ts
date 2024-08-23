import { NavigationRoute } from "../models/navigationRoutesModels";

export const navigationRoutes: NavigationRoute[] = [
  {
    title: 'Forside',
    route: '',
    subRoutes: [
      { title: 'Bliv Frivillig', route: 'forside/bliv-frivillig' },
      { title: 'Funding', route: 'forside/funding' },
    ],
  },
  {
    title: 'Om os',
    route: 'om',
    subRoutes: [
      { title: 'Historie', route: 'om/historie' },
      { title: 'Team', route: 'om/team' },
      { title: 'Mission', route: 'om/mission' },
    ],
  },
  {
    title: 'Aktiviteter',
    route: 'aktiviteter',
    subRoutes: [
      { title: 'Kalender', route: 'aktiviteter/kalender' },
      { title: 'Highlights', route: 'aktiviteter/highlights' },
    ],
  },
  {
    title: 'Kontakt',
    route: 'kontakt',
    subRoutes: [
      { title: 'Kontaktformular', route: 'kontakt/kontaktformular' },
      { title: 'Lokation', route: 'kontakt/lokation' },
    ],
  },
  {
    title: 'Hold',
    route: 'hold',
    subRoutes: [
      { title: 'Oversigt', route: 'hold/oversigt' },
      { title: 'Tilmelding', route: 'hold/tilmelding' },
      { title: 'Kontakt', route: 'hold/kontakt' },
      { title: 'Tider', route: 'hold/tider' },
    ],
  },
];
