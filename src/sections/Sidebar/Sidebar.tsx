import { useState } from 'react';
import { Link } from 'react-router-dom';

import DefaultIcon from '@mui/icons-material/Deblur';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import routes from '@/routes';
import { Routes } from '@/routes/types';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';

import './Sidebar.sass';

function Sidebar() {
  const [isSidebarOpen, sidebarActions] = useSidebar();
  const [, themeActions] = useTheme();
  const [open, setOpen] = useState<any>({});

  // funcion que modifica el estado del collapse
  const handleClick = (param: string) => {
    setOpen((prevState: any) => ({ [param]: !prevState[param] }));
  };

  function drawerMenu(routesList: Routes = routes, level = 1) {
    return Object.values(routesList)
      .filter(({ title, hide }) => title && !hide)
      .map(({ subPath, path, title, icon: Icon, func }) => {
        if (!subPath) {
          return (
            <ListItem sx={{ p: 0 }} key={path}>
              <ListItemButton component={Link} to={path as string} onClick={sidebarActions.close}>
                <ListItemIcon>{Icon ? <Icon /> : <DefaultIcon />}</ListItemIcon>
                <ListItemText>{title}</ListItemText>
              </ListItemButton>
            </ListItem>
          );
        } else {
          return (
            <List key={path}>
              <ListItem sx={{ p: 0 }}>
                <ListItemButton onClick={() => handleClick(title)}>
                  <ListItemIcon>{Icon ? <Icon /> : <DefaultIcon />}</ListItemIcon>
                  <ListItemText>{title}</ListItemText>
                  {open[title] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse in={open[title]} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  style={{ backdropFilter: `brightness(${1 - 0.1 * level})` }}
                >
                  <Divider />
                  {drawerMenu(subPath, level++)}
                  <Divider />
                </List>
              </Collapse>
            </List>
          );
        }
      });
  }

  return (
    <SwipeableDrawer
      anchor="left"
      open={isSidebarOpen}
      onClose={sidebarActions.close}
      onOpen={sidebarActions.open}
      disableBackdropTransition={false}
      swipeAreaWidth={30}
      id="sidebar"
    >
      <List sx={{ width: 250, pt: (theme) => `${theme.mixins.toolbar.minHeight}px` }}>
        {drawerMenu()}
      </List>
    </SwipeableDrawer>
  );
}

export default Sidebar;
