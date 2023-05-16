import * as React from 'react';
import { useState, Fragment, useEffect } from 'react';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { GetNotifications } from '@/services/notification/notification.services';
import GNotificationItem from '@/shared/components/Generic/GNotificationsItem/GNotificationItem';
import GTabPanel from '@/shared/components/Generic/GTabPanel/GTabPanel';
import { CustomNotification } from '@/shared/interfaces/common';

import './Notifications.sass';

export default function Notifications() {
  const [notifications, setNotifications] = useState<CustomNotification[]>([]);
  useEffect(() => {
    GetNotifications().then((response) => {
      setNotifications(response);
    });
  }, []);
  const today = new Date();
  const validNotifications = notifications.filter(({ fecha }) => {
    return fecha ? fecha >= today : false;
  });
  const pastNotifications = notifications.filter(({ fecha }) => {
    return fecha ? fecha < today : false;
  });
  console.log(notifications);
  return (
    <GTabPanel
      tabs={[
        { name: 'Activas', badge: validNotifications.length },
        { name: 'Pasadas', badge: pastNotifications.length },
      ]}
    >
      <List sx={{ width: '100%', marginTop: '-14px' }}>
        <>
          {validNotifications.map((notice: CustomNotification, index: number) => {
            return <GNotificationItem key={index} {...notice} />;
          })}
        </>
      </List>
      <List sx={{ width: '100%', marginTop: '-14px' }}>
        <>
          {pastNotifications.map((notice: CustomNotification, index: number) => {
            return <GNotificationItem key={index} {...notice} />;
          })}
        </>
      </List>
    </GTabPanel>
  );
}
