export interface NavigationRoute {
  title: string;
  route: string;
  subRoutes: {
    title: string;
    route: string;
  }[];
}

export type MainRoute = Omit<NavigationRoute, 'subRoutes'>;
