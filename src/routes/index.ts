import CreditScoreIcon from '@mui/icons-material/CreditScore';
import HomeIcon from '@mui/icons-material/Home';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    path: '/',
    title: 'Inicio',
    icon: HomeIcon,
  },
  [Pages.VentaRegulada]: {
    component: asyncComponentLoader(() => import('@/pages/VentaRegulada')),
    path: '/venta-regulada',
    title: 'Venta Regulada',
    icon: ShoppingCartIcon,
  },
  [Pages.MisNucleos]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound/NotFound')),
    path: '/nukes',
    title: 'Mis núcleos',
    icon: RecentActorsIcon,
  },
  [Pages.Notification]: {
    component: asyncComponentLoader(() => import('@/pages/Notifications')),
    path: '/notifications',
    title: '',
  },
  [Pages.Perfil]: {
    component: asyncComponentLoader(() => import('@/pages/Profile')),
    path: '/profile',
    title: '',
  },
  [Pages.Ajustes]: {
    path: '/other',
    title: 'Ajustes',
    icon: SettingsIcon,
    subPath: {
      [Pages.Suscripción]: {
        component: asyncComponentLoader(() => import('@/pages/NotFound/NotFound')),
        path: '/subscription',
        title: 'Suscripción',
        icon: CreditScoreIcon,
      },
    },
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound/NotFound')),
    path: '*',
    title: '',
  },
};

export default routes;
