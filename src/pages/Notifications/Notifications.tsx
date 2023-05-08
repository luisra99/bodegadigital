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
import { CustomNotification } from '@/shared/interfaces/common';

import './Notifications.sass';

export default function Notifications() {
  const [NotificationsOffice, setNotificationOffice] = useState<CustomNotification[]>([
    {
      title: "Modulo en la TRD 'Los Combatientes'",
      subTitle: 'Productos',
      content: 'Pan, Leche, Aceite, Azucar,Detergente, Jabon',
      secondarySubTitle: 'Distribucion',
      secondaryContent: 'Por CDR (actual 4)',
      price: 80.0,
    },
    {
      title: "Modulo en la TRD 'Los Combatientes'",
      subTitle: 'Productos',
      content: 'Pan, Leche, Aceite, Azucar,Detergente, Jabon',
      secondarySubTitle: 'Distribucion',
      secondaryContent: 'Por CDR (actual 4)',
      price: 80.0,
    },
  ]);
  const [NotificationsStore, setNotificationStore] = useState<CustomNotification[]>([
    {
      title: "Modulo en la TRD 'Los Combatientes'",
      subTitle: 'Productos',
      content: 'Pan, Leche, Aceite, Azucar,Detergente, Jabon',
      secondarySubTitle: 'Distribucion',
      secondaryContent: 'Por CDR (actual 4)',
      price: 80.0,
    },
  ]);
  const [NotificationsNuke, setNotificationNuke] = useState<CustomNotification[]>([
    {
      title: "Modulo en la TRD 'Los Combatientes'",
      subTitle: 'Productos',
      content: 'Pan, Leche, Aceite, Azucar,Detergente, Jabon',
      secondarySubTitle: 'Distribucion',
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
        { name: 'Pasadas', badge: notificationsCount },
      ]}
    >
      <List sx={{ width: '100%' }}>
        <>
          <h4 className="notification-header">
            <b>Nucleo</b>
          </h4>
          {NotificationsNuke.map(
            (
              {
                title,
                subTitle,
                content,
                secondarySubTitle,
                secondaryContent,
                price,
              }: CustomNotification,
              index: number,
            ) => {
              return (
                <Fragment key={index}>
                  <ListItem alignItems="flex-start" className="notification-item">
                    <ListItemText
                      primary={title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {`${subTitle} - `}
                          </Typography>
                          {content}
                          {secondarySubTitle && (
                            <>
                              <br />
                              <Typography component="span" variant="body2" color="text.primary">
                                {`${secondarySubTitle} - `}
                              </Typography>
                              {secondaryContent}
                            </>
                          )}
                        </React.Fragment>
                      }
                    />
                    {price && <p className="price-tag">Precio: ${price}</p>}
                  </ListItem>
                </Fragment>
              );
            },
          )}
          <Divider component="li" />
          <h4 className="notification-header">Bodega</h4>
          {NotificationsStore.map(
            (
              {
                title,
                subTitle,
                content,
                secondarySubTitle,
                secondaryContent,
                price,
              }: CustomNotification,
              index: number,
            ) => {
              return (
                <Fragment key={index}>
                  <ListItem alignItems="flex-start" className="notification-item">
                    <ListItemText
                      primary={title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {`${subTitle} - `}
                          </Typography>
                          {content}
                          {secondarySubTitle && (
                            <>
                              <br />
                              <Typography component="span" variant="body2" color="text.primary">
                                {`${secondarySubTitle} - `}
                              </Typography>
                              {secondaryContent}
                            </>
                          )}
                        </React.Fragment>
                      }
                    />
                    {price && <p className="price-tag">Precio: ${price}</p>}
                  </ListItem>
                </Fragment>
              );
            },
          )}
          <Divider component="li" />
          <h4 className="notification-header">Oficina de comercio</h4>
          {NotificationsOffice.map(
            (
              {
                title,
                subTitle,
                content,
                secondarySubTitle,
                secondaryContent,
                price,
              }: CustomNotification,
              index: number,
            ) => {
              return (
                <Fragment key={index}>
                  <ListItem alignItems="flex-start" className="notification-item">
                    <ListItemText
                      primary={title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {`${subTitle} - `}
                          </Typography>
                          {content}
                          {secondarySubTitle && (
                            <>
                              <br />
                              <Typography component="span" variant="body2" color="text.primary">
                                {`${secondarySubTitle} - `}
                              </Typography>
                              {secondaryContent}
                            </>
                          )}
                        </React.Fragment>
                      }
                    />
                    {price && <p className="price-tag">Precio: ${price}</p>}
                  </ListItem>
                </Fragment>
              );
            },
          )}
        </>
      </List>
      <List sx={{ width: '100%' }}>
        <>
          <h4 className="notification-header">
            <b>Nucleo</b>
          </h4>
          {NotificationsNuke.map(
            (
              {
                title,
                subTitle,
                content,
                secondarySubTitle,
                secondaryContent,
                price,
              }: CustomNotification,
              index: number,
            ) => {
              return (
                <Fragment key={index}>
                  <ListItem alignItems="flex-start" className="notification-item">
                    <ListItemText
                      primary={title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {`${subTitle} - `}
                          </Typography>
                          {content}
                          {secondarySubTitle && (
                            <>
                              <br />
                              <Typography component="span" variant="body2" color="text.primary">
                                {`${secondarySubTitle} - `}
                              </Typography>
                              {secondaryContent}
                            </>
                          )}
                        </React.Fragment>
                      }
                    />
                    {price && <p className="price-tag">Precio: ${price}</p>}
                  </ListItem>
                </Fragment>
              );
            },
          )}
          <Divider component="li" />
          <h4 className="notification-header">Bodega</h4>
          {NotificationsStore.map(
            (
              {
                title,
                subTitle,
                content,
                secondarySubTitle,
                secondaryContent,
                price,
              }: CustomNotification,
              index: number,
            ) => {
              return (
                <Fragment key={index}>
                  <ListItem alignItems="flex-start" className="notification-item">
                    <ListItemText
                      primary={title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {`${subTitle} - `}
                          </Typography>
                          {content}
                          {secondarySubTitle && (
                            <>
                              <br />
                              <Typography component="span" variant="body2" color="text.primary">
                                {`${secondarySubTitle} - `}
                              </Typography>
                              {secondaryContent}
                            </>
                          )}
                        </React.Fragment>
                      }
                    />
                    {price && <p className="price-tag">Precio: ${price}</p>}
                  </ListItem>
                </Fragment>
              );
            },
          )}
          <Divider component="li" />
          <h4 className="notification-header">Oficina de comercio</h4>
          {NotificationsOffice.map(
            (
              {
                title,
                subTitle,
                content,
                secondarySubTitle,
                secondaryContent,
                price,
              }: CustomNotification,
              index: number,
            ) => {
              return (
                <Fragment key={index}>
                  <ListItem alignItems="flex-start" className="notification-item">
                    <ListItemText
                      primary={title}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" color="text.primary">
                            {`${subTitle} - `}
                          </Typography>
                          {content}
                          {secondarySubTitle && (
                            <>
                              <br />
                              <Typography component="span" variant="body2" color="text.primary">
                                {`${secondarySubTitle} - `}
                              </Typography>
                              {secondaryContent}
                            </>
                          )}
                        </React.Fragment>
                      }
                    />
                    {price && <p className="price-tag">Precio: ${price}</p>}
                  </ListItem>
                </Fragment>
              );
            },
          )}
        </>
      </List>
    </GTabPanel>
  );
}
