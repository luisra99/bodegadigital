import * as React from 'react';
import { useState, Fragment } from 'react';

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import GTabPanel from '@/shared/components/Generic/GTabPanel/GTabPanel';

import './Notifications.sass';

interface NotificationItem {
  title: string;
  subtitle: string;
  content: string;
  secondarySubtitle?: string;
  secondaryContent?: string;
  price?: number;
}
export default function Notifications() {
  const [NotificationsOffice, setNotificationOffice] = useState<NotificationItem[]>([
    {
      title: "Modulo en la TRD 'Los Combatientes'",
      subtitle: 'Productos',
      content: 'Pan, Leche, Aceite, Azucar,Detergente, Jabon',
      secondarySubtitle: 'Distribucion',
      secondaryContent: 'Por CDR (actual 4)',
      price: 80.0,
    },
    {
      title: "Modulo en la TRD 'Los Combatientes'",
      subtitle: 'Productos',
      content: 'Pan, Leche, Aceite, Azucar,Detergente, Jabon',
      secondarySubtitle: 'Distribucion',
      secondaryContent: 'Por CDR (actual 4)',
      price: 80.0,
    },
  ]);
  const [NotificationsStore, setNotificationStore] = useState<NotificationItem[]>([
    {
      title: "Modulo en la TRD 'Los Combatientes'",
      subtitle: 'Productos',
      content: 'Pan, Leche, Aceite, Azucar,Detergente, Jabon',
      secondarySubtitle: 'Distribucion',
      secondaryContent: 'Por CDR (actual 4)',
      price: 80.0,
    },
  ]);
  const [NotificationsNuke, setNotificationNuke] = useState<NotificationItem[]>([
    {
      title: "Modulo en la TRD 'Los Combatientes'",
      subtitle: 'Productos',
      content: 'Pan, Leche, Aceite, Azucar,Detergente, Jabon',
      secondarySubtitle: 'Distribucion',
      secondaryContent: 'Por CDR (actual 4)',
      price: 80.0,
    },
  ]);

  const notificationsCount =
    NotificationsOffice.length + NotificationsStore.length + NotificationsNuke.length;
  return (
    <GTabPanel
      tabs={[
        { name: 'Activas', badge: notificationsCount },
        { name: 'Pasadas', badge: 3 },
      ]}
    >
      <List sx={{ width: '100%' }}>
        <>
          <h4 className="notification-header">Nucleo</h4>
          {NotificationsNuke.map(
            (
              {
                title,
                subtitle,
                content,
                secondarySubtitle,
                secondaryContent,
                price,
              }: NotificationItem,
              index: number,
            ) => {
              return (
                <Fragment key={index}>
                  <ListItem alignItems="flex-start" sx={{ display: 'table' }}>
                    <ListItemText
                      primary={title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {`${subtitle} - `}
                          </Typography>
                          {content}
                          {secondarySubtitle && (
                            <>
                              <br />
                              <Typography component="span" variant="body2" color="text.primary">
                                {`${secondarySubtitle} - `}
                              </Typography>
                              {secondaryContent}
                            </>
                          )}
                        </React.Fragment>
                      }
                    />
                    {price && <p style={{ margin: '0px', textAlign: 'right' }}>Precio: ${price}</p>}
                  </ListItem>
                  <Divider component="li" />
                </Fragment>
              );
            },
          )}
          <h4 className="notification-header">Bodega</h4>
          {NotificationsStore.map(
            (
              {
                title,
                subtitle,
                content,
                secondarySubtitle,
                secondaryContent,
                price,
              }: NotificationItem,
              index: number,
            ) => {
              return (
                <Fragment key={index}>
                  <ListItem alignItems="flex-start" sx={{ display: 'table' }}>
                    <ListItemText
                      primary={title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {`${subtitle} - `}
                          </Typography>
                          {content}
                          {secondarySubtitle && (
                            <>
                              <br />
                              <Typography component="span" variant="body2" color="text.primary">
                                {`${secondarySubtitle} - `}
                              </Typography>
                              {secondaryContent}
                            </>
                          )}
                        </React.Fragment>
                      }
                    />
                    {price && <p style={{ margin: '0px', textAlign: 'right' }}>Precio: ${price}</p>}
                  </ListItem>
                  <Divider component="li" />
                </Fragment>
              );
            },
          )}
          <h4 className="notification-header">Oficina de comercio</h4>
          {NotificationsOffice.map(
            (
              {
                title,
                subtitle,
                content,
                secondarySubtitle,
                secondaryContent,
                price,
              }: NotificationItem,
              index: number,
            ) => {
              return (
                <Fragment key={index}>
                  <ListItem alignItems="flex-start" sx={{ display: 'table' }}>
                    <ListItemText
                      primary={title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {`${subtitle} - `}
                          </Typography>
                          {content}
                          {secondarySubtitle && (
                            <>
                              <br />
                              <Typography component="span" variant="body2" color="text.primary">
                                {`${secondarySubtitle} - `}
                              </Typography>
                              {secondaryContent}
                            </>
                          )}
                        </React.Fragment>
                      }
                    />
                    {price && <p style={{ margin: '0px', textAlign: 'right' }}>Precio: ${price}</p>}
                  </ListItem>
                  <Divider component="li" />
                </Fragment>
              );
            },
          )}
        </>
      </List>
      <List sx={{ width: '100%' }}>
        <>
          <h4 className="notification-header">Nucleo</h4>
          {NotificationsNuke.map(
            (
              {
                title,
                subtitle,
                content,
                secondarySubtitle,
                secondaryContent,
                price,
              }: NotificationItem,
              index: number,
            ) => {
              return (
                <Fragment key={index}>
                  <ListItem alignItems="flex-start" sx={{ display: 'table' }}>
                    <ListItemText
                      primary={title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {`${subtitle} - `}
                          </Typography>
                          {content}
                          {secondarySubtitle && (
                            <>
                              <br />
                              <Typography component="span" variant="body2" color="text.primary">
                                {`${secondarySubtitle} - `}
                              </Typography>
                              {secondaryContent}
                            </>
                          )}
                        </React.Fragment>
                      }
                    />
                    {price && <p style={{ margin: '0px', textAlign: 'right' }}>Precio: ${price}</p>}
                  </ListItem>
                  <Divider component="li" />
                </Fragment>
              );
            },
          )}
          <h4 className="notification-header">Bodega</h4>
          {NotificationsStore.map(
            (
              {
                title,
                subtitle,
                content,
                secondarySubtitle,
                secondaryContent,
                price,
              }: NotificationItem,
              index: number,
            ) => {
              return (
                <Fragment key={index}>
                  <ListItem alignItems="flex-start" sx={{ display: 'table' }}>
                    <ListItemText
                      primary={title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {`${subtitle} - `}
                          </Typography>
                          {content}
                          {secondarySubtitle && (
                            <>
                              <br />
                              <Typography component="span" variant="body2" color="text.primary">
                                {`${secondarySubtitle} - `}
                              </Typography>
                              {secondaryContent}
                            </>
                          )}
                        </React.Fragment>
                      }
                    />
                    {price && <p style={{ margin: '0px', textAlign: 'right' }}>Precio: ${price}</p>}
                  </ListItem>
                  <Divider component="li" />
                </Fragment>
              );
            },
          )}
          <h4 className="notification-header">Oficina de comercio</h4>
          {NotificationsOffice.map(
            (
              {
                title,
                subtitle,
                content,
                secondarySubtitle,
                secondaryContent,
                price,
              }: NotificationItem,
              index: number,
            ) => {
              return (
                <Fragment key={index}>
                  <ListItem alignItems="flex-start" sx={{ display: 'table' }}>
                    <ListItemText
                      primary={title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {`${subtitle} - `}
                          </Typography>
                          {content}
                          {secondarySubtitle && (
                            <>
                              <br />
                              <Typography component="span" variant="body2" color="text.primary">
                                {`${secondarySubtitle} - `}
                              </Typography>
                              {secondaryContent}
                            </>
                          )}
                        </React.Fragment>
                      }
                    />
                    {price && <p style={{ margin: '0px', textAlign: 'right' }}>Precio: ${price}</p>}
                  </ListItem>
                  <Divider component="li" />
                </Fragment>
              );
            },
          )}
        </>
      </List>
    </GTabPanel>
  );
}
