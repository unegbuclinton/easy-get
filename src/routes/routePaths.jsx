import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';

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
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
];
