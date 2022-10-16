import LandingPage from '../pages/LandingPage';

export const privateRoutes = [
  // {
  //   path: 'dashboard/*',
  //   element: <Outlet />,
  //   children: [
  //     {
  //       path: '/',
  //       element: <Dashboard />
  //     },
  //     {
  //       path: 'smart',
  //       element: <Campaign />
  //     },
  //     {
  //       path: 'contact',
  //       element: <SendVerification />
  //     }
  //   ]
  // },
  //   {
  //     path: '/organisation-settings',
  //     element: <OrganisationSettings />,
  //   },
];

export const publicRoutes = [
  {
    path: '/',
    element: <LandingPage />,
  },
];
