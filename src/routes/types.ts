import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';

enum Pages {
  Welcome,
  Page1,
  Page2,
  Page3,
  Page4,
  NotFound,
  Perfil,
  Aplicación,
  Estilo,
  SignUp,
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
};

type Routes = Record<string, PathRouteProps & PathRouteCustomProps>;

export type { Routes, PathRouteProps, PathRouteCustomProps };
export { Pages };
