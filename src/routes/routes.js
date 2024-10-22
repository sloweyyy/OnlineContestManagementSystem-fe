import { lazy } from 'react';

const routes = [
    {
        path: '/',
        element: lazy(() => import('../pages/home/Home')),
        authRequired: false,
    },
    {
        path: '/contest-creating',
        element: lazy(() => import('../pages/contest-creating/ContestCreating')),
        authRequired: false,
    },
    {
        path: '/contest',
        element: lazy(() => import('../pages/contest/Contest')),
        authRequired: false,
    },
    {
        path: '/user-profile',
        element: lazy(() => import('../pages/user-profile/UserProfile')),
        authRequired: false,
    },
    {
        path: '*',
        element: lazy(() => import('../pages/notfound/NotFound')),
    },
];

export default routes;
