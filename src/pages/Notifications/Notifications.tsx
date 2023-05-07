import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import GTabPanel from '@/shared/components/Generic/GTabPanel/GTabPanel';

export default function Notifications() {
  return (
    <GTabPanel
      tabs={[
        { name: 'Activas', badge: 4 },
        { name: 'Pasadas', badge: 3 },
      ]}
    >
      <List sx={{ width: '100%' }}>
        <ListItem alignItems="flex-start" sx={{ display: 'table' }}>
          <ListItemText
            primary="Modulo en la TRD 'Los Combatientes'"
            secondary={
              <React.Fragment>
                <Typography component="span" variant="body2" color="text.primary">
                  Productos -
                </Typography>
                {` Pan, Leche, Aceite, Azucar,Detergente, Jabon`}
              </React.Fragment>
            }
          />
          <p style={{ margin: '0px', textAlign: 'right' }}>Precio: $500.00</p>
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start" sx={{ display: 'table' }}>
          <ListItemText
            primary="Modulo en la TRD 'Los Combatientes'"
            secondary={
              <React.Fragment>
                <Typography component="span" variant="body2" color="text.primary">
                  Productos -
                </Typography>
                {` Pan, Leche, Aceite, Azucar,Detergente, Jabon`}
              </React.Fragment>
            }
          />
          <p style={{ margin: '0px', textAlign: 'right' }}>Precio: $500.00</p>
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start" sx={{ display: 'table' }}>
          <ListItemText
            primary="Modulo en la TRD 'Los Combatientes'"
            secondary={
              <React.Fragment>
                <Typography component="span" variant="body2" color="text.primary">
                  Productos -
                </Typography>
                {` Pan, Leche, Aceite, Azucar,Detergente, Jabon`}
              </React.Fragment>
            }
          />
          <p style={{ margin: '0px', textAlign: 'right' }}>Precio: $500.00</p>
        </ListItem>
        <Divider component="li" />
      </List>
      <>
        <List sx={{ width: '100%' }}>
          <ListItem alignItems="flex-start" sx={{ display: 'table' }}>
            <ListItemText
              primary="Modulo en la TRD 'Los Combatientes'"
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" color="text.primary">
                    Productos -
                  </Typography>
                  {` Pan, Leche, Aceite, Azucar,Detergente, Jabon`}
                </React.Fragment>
              }
            />
            <p style={{ margin: '0px', textAlign: 'right' }}>Precio: $500.00</p>
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start" sx={{ display: 'table' }}>
            <ListItemText
              primary="Modulo en la TRD 'Los Combatientes'"
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" color="text.primary">
                    Productos -
                  </Typography>
                  {` Pan, Leche, Aceite, Azucar,Detergente, Jabon`}
                </React.Fragment>
              }
            />
            <p style={{ margin: '0px', textAlign: 'right' }}>Precio: $500.00</p>
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start" sx={{ display: 'table' }}>
            <ListItemText
              primary="Modulo en la TRD 'Los Combatientes'"
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" color="text.primary">
                    Productos -
                  </Typography>
                  {` Pan, Leche, Aceite, Azucar,Detergente, Jabon`}
                </React.Fragment>
              }
            />
            <p style={{ margin: '0px', textAlign: 'right' }}>Precio: $500.00</p>
          </ListItem>
          <Divider component="li" />
        </List>
      </>
    </GTabPanel>
  );
}
