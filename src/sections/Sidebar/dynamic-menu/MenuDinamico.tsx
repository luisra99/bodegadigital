// import React from 'react';
// import { useState } from 'react';

// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import Collapse from '@mui/material/Collapse';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Link from 'next/link';

// import { MenuItem } from '@/interfaces/request-interface';

// const MenuDinamico = ({ menuItems }: { menuItems: MenuItem[] }) => {
//   //hook para el control del estado del collapse
//   const [open, setOpen] = useState<any>({});

//   // funcion que modifica el estado del collapse
//   const handleClick = (param: string) => {
//     setOpen((prevState: any) => ({ [param]: !prevState[param] }));
//   };

//   function drawerMenu(menuItems: MenuItem[]) {
//     return menuItems.map((item: MenuItem) => {
//       if (!item.children) {
//         return (
//             <ListItem sx={{ p: 0 }} key={item.href}>
//                 <ListItemButton component={Link} to={item.href as string} onClick={sidebarActions.close}>
//                 <ListItemIcon>{item.icon ? <Icon /> : <DefaultIcon />}</ListItemIcon>
//                 <ListItemText>{item.name}</ListItemText>
//               </ListItemButton>
//               </ListItem>
//         );
//       } else {
//         return (
//            <ListItem sx={{ p: 0 }} key={item.href}>
//             <ListItemButton onClick={() => handleClick(item.name)}>
//               <ListItemText>{item.name}</ListItemText>
//               {open[item.name] ? <ExpandLess /> : <ExpandMore />}
//             </ListItemButton>
//             <Collapse in={open[item.name]} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 {drawerMenu(item.children)}
//               </List>
//             </Collapse>
//           </ListItem>
//         );
//       }
//     });
//   }
//   return <div>{drawerMenu(menuItems)}</div>;
// };
// export default MenuDinamico;
