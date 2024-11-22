import { lazy } from 'react';

const routes = [
  // Auth routes
  {
    path: '/sign-in',
    element: lazy(() => import('../pages/auth/SignIn')),
    authRequired: false,
  },
  {
    path: '/sign-up',
    element: lazy(() => import('../pages/auth/SignUp')),
    authRequired: false,
  },
  {
    path: '/forgot-password',
    element: lazy(() => import('../pages/auth/ForgotPasswordCard')),
    authRequired: false,
  },
  {
    path: '/otp',
    element: lazy(() => import('../pages/auth/OTP')),
    authRequired: false,
  },
  {
    path: '/confirm-password',
    element: lazy(() => import('../pages/auth/ConfirmPasswordCard')),
    authRequired: false,
  },
  {
    path: '/successfully',
    element: lazy(() => import('../pages/auth/SuccessfullyCard')),
    authRequired: false,
  },

  // Unauthorized routes
  {
    path: '/',
    element: lazy(() => import('../pages/landing-page/LandingPage')),
    authRequired: false,
  },
  {
    path: '/about',
    element: lazy(() => import('../pages/landing-page/About')),
    authRequired: false,
  },
  {
    path: '/contact',
    element: lazy(() => import('../pages/landing-page/Contact')),
    authRequired: false,
  },
  {
    path: '/guide',
    element: lazy(() => import('../pages/landing-page/Guide')),
    authRequired: false,
  },

  // Authorized routes
  {
    path: '/home',
    element: lazy(() => import('../pages/home/Home')),
    authRequired: true,
  },
  {
    path: '/contest-creating',
    element: lazy(() => import('../pages/contest-creating/ContestCreating')),
    authRequired: true,
  },
  {
    path: '/contest',
    element: lazy(() => import('../pages/contest/Contest')),
    authRequired: true,
  },
  {
    path: '/user-profile',
    element: lazy(() => import('../pages/user-profile/UserProfile')),
    authRequired: true,
  },
  {
    path: '/detail-contest',
    element: lazy(() => import('../pages/contest/DetailContest')),
    authRequired: true,
  },

  // Other routes
  {
    path: '*',
    element: lazy(() => import('../pages/static-pages/NotFoundPage')),
  },
];

export default routes;
