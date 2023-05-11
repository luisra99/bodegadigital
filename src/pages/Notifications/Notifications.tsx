import * as React from 'react';
import { useState, Fragment, useEffect } from 'react';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { GetNotifications } from '@/services/notification/notification.services';
import GTabPanel from '@/shared/components/Generic/GTabPanel/GTabPanel';
import { CustomNotification } from '@/shared/interfaces/common';

import './Notifications.sass';

export default function Notifications() {
  const [notifications, setNotifications] = useState({ office: [], store: [], nuke: [] });
  useEffect(() => {
    GetNotifications().then((response) => {
      setNotifications(response);
    });
  }, []);
  const { office, store, nuke } = notifications;

  const notificationsCount = office.length + store.length + nuke.length;
  return (
    <GTabPanel
      tabs={[
        { name: 'Activas', badge: notificationsCount },
        { name: 'Pasadas', badge: notificationsCount },
      ]}
    >
      <List sx={{ width: '100%', marginTop: '-24px' }}>
        <>
          <h4 className="notification-header">
            <b>Núcleo</b>
          </h4>
          {nuke.map(
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
          {store.map(
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
          {office.map(
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
      <List sx={{ width: '100%', marginTop: '-24px' }}>
        <>
          <h4 className="notification-header">
            <b>Núcleo</b>
          </h4>
          {nuke.map(
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
          {store.map(
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
          {office.map(
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
