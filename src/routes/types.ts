import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';

enum Pages {
  Welcome,
  LandingPage,
  VentaRegulada,
  MisNucleos,
  Productos,
  Aplicación,
  Estilo,
  NotFound,
  Notification,
  Perfil,
  SignUp,
  Suscripción,
  Ajustes,
}
enum MenuItemType {
  'Header',
  'Item',
}

type PathRouteCustomProps = {
  title: string;
  component?: FC;
  type?: MenuItemType;
  icon?: FC<SvgIconProps>;
  subPath?: Routes;
  hide?: boolean;
  func?(): void;
  inverted?: boolean;
};

type Routes = Record<string, PathRouteProps & PathRouteCustomProps>;

export type { Routes, PathRouteProps, PathRouteCustomProps };
export { Pages };
