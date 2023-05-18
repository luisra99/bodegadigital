import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';

import { CustomNotification } from '@/shared/interfaces/common';
import { Actions } from '@/store/notifications/types';

export function showNotification(notificationsActions: Actions, notification: CustomNotification) {
  const {
    type,
    title = '',
    subTitle = '',
    content = '',
    secondarySubTitle = '',
    secondaryContent = '',
    advice = '',
    price = '',
  } = notification;
  const id = Math.random().toString();
  notificationsActions.push(
    {
      options: {
        content: (
          <Alert
            severity={type}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  notificationsActions.close(id);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>{title}</AlertTitle>
            <b>{subTitle}: </b>
            {content}
            {price && ` - $${price}.`}
            {!!secondarySubTitle && (
              <>
                <br />
                <b>{secondarySubTitle}: </b>
                {secondaryContent}
              </>
            )}
            {!!advice && (
              <>
                <br />
                <p
                  style={{
                    textAlign: 'end',
                    marginTop: '0px',
                    marginBottom: '0px',
                    marginRight: '10px',
                  }}
                >
                  <i>{advice}</i>
                </p>
              </>
            )}
          </Alert>
        ),
      },
    },
    id,
  );
}
