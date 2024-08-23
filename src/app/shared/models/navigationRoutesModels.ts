export interface NavigationRoute {
  title: string;
  route: string;
  subRoutes: {
    title: string;
    route: string;
  }[];
  icon?: string;
}

export type MainRoute = Omit<NavigationRoute, 'subRoutes'>;
