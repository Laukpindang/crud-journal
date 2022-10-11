import { lazy } from 'react';

const ListRoutes = [
    {
        path: '/jurnal',
        component: lazy(() =>
        import('../components/jurnal/Jurnal')
        )
    }
];

export {ListRoutes};