import HomeIcon from '@mui/icons-material/Home';
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
  [Pages.Page2]: {
    component: asyncComponentLoader(() => import('@/pages/ProductosPage')),
    path: '/productos',
    title: 'Productos',
    icon: ShoppingCartIcon,
  },
  [Pages.Notification]: {
    component: asyncComponentLoader(() => import('@/pages/Notifications')),
    path: '/notifications',
    title: 'Notificación',
  },
  [Pages.Perfil]: {
    component: asyncComponentLoader(() => import('@/pages/Profile')),
    path: '/profile',
    title: 'Perfil',
  },
  [Pages.Page4]: {
    path: '/other',
    title: 'Ajustes',
    icon: SettingsIcon,
    subPath: {
      [Pages.Estilo]: {
        component: asyncComponentLoader(() => import('@/pages/ProductosPage')),
        path: 'nost',
        title: 'Estilo',
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
