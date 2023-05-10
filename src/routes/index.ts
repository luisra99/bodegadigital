import AddTaskIcon from '@mui/icons-material/AddTask';
import BugReportIcon from '@mui/icons-material/BugReport';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import GitHubIcon from '@mui/icons-material/GitHub';
import Groups2Icon from '@mui/icons-material/Groups2';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TerrainIcon from '@mui/icons-material/Terrain';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    path: '/',
    title: 'Inicio',
    icon: HomeIcon,
  },
  [Pages.Page1]: {
    component: asyncComponentLoader(() => import('@/pages/NucleoPage')),
    path: '/nucleo',
    title: 'Núcleo',
    icon: Groups2Icon,
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
    title: '',
  },
  [Pages.Page3]: {
    component: asyncComponentLoader(() => import('@/pages/Page3/Page3')),
    path: '/profile',
    title: 'Perfil',
  },
  [Pages.Page4]: {
    path: '/other',
    title: 'Ajustes',
    icon: SettingsIcon,
    subPath: {
      [Pages.Aplicación]: {
        component: asyncComponentLoader(() => import('@/pages/NucleoPage/')),
        path: 'not',
        title: 'Aplicación',
        icon: DisplaySettingsIcon,
      },
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
