import React from 'react';

import { ListItem, ListItemText, Typography } from '@mui/material';

import { CustomNotification } from '@/shared/interfaces/common';

export default function GNotificationItem({
  title,
  subTitle,
  content,
  secondarySubTitle,
  secondaryContent,
  price,
  fecha,
  hora,
}: CustomNotification) {
  return (
    <ListItem alignItems="flex-start" className="notification-item">
      <ListItemText
        primary={title}
        secondary={
          <>
            <Typography component="span" variant="body2" color="text.primary">
              {`${subTitle} - `}
            </Typography>
            {content}
            {price && ` - $ ${price}.`}
            {secondarySubTitle && secondaryContent && (
              <>
                <br />
                <Typography component="span" variant="body2" color="text.primary">
                  {`${secondarySubTitle} - ${secondaryContent}`}
                </Typography>
              </>
            )}
          </>
        }
      />
      {fecha && (
        <p className="price-tag">{`${fecha} ${hora && ` - ${hora}`}`}</p>
        // <p className="price-tag">{`${fecha.toLocaleDateString()} ${hora && ` - ${hora}`}`}</p>
      )}
    </ListItem>
  );
}
