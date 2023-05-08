import { Link } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import ThemeIcon from '@mui/icons-material/InvertColors';
import MenuIcon from '@mui/icons-material/Menu';
import Notifications from '@mui/icons-material/Notifications';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { repository, title } from '@/config';
import { FlexBox } from '@/shared/components/styled';
import { Notification } from '@/shared/interfaces/common';
import useHotKeysDialog from '@/store/hotkeys';
import useNotifications from '@/store/notifications';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';

import { HotKeysButton } from './styled';

function Header() {
  const [, sidebarActions] = useSidebar();
  const [, themeActions] = useTheme();
  const [, notificationsActions] = useNotifications();
  const [, hotKeysDialogActions] = useHotKeysDialog();

  function showNotification(notification: Notification) {
    const {
      type,
      title = '',
      subTitle = '',
      content = '',
      additionalContent: { title: additionalTitle = '', content: additionalContent = '' } = {},
      advice = '',
      price = '',
    } = notification;
    const id = Math.random().toString();
    notificationsActions.push(
      {
        options: {
          // Show fully customized notification
          // Usually, to show a notification, you'll use something like this:
          // notificationsActions.push({ message: ... })
          // `message` accepts string as well as ReactNode
          // But you also can use:
          // notificationsActions.push({ options: { content: ... } })
          // to show fully customized notification
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
              {!!additionalTitle && (
                <>
                  <br />
                  <b>{additionalTitle}: </b>
                  {additionalContent}
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="start"
              color="info"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Button
              onClick={() =>
                showNotification({
                  type: 'info',
                  title: 'Producto nuevo en la TRD "Los Combatientes"',
                  subTitle: 'Productos',
                  content: 'Aceite, Pan, Azucar',
                  additionalContent: { title: 'Distribucion', content: 'Por CDR' },
                  advice: 'Miercoles 16:00h',
                  price: '250.00',
                })
              }
              color="info"
            >
              Ejemplo Aviso
            </Button>
          </FlexBox>
          <FlexBox>
            <FlexBox>
              <Tooltip title="Hot keys" arrow>
                <HotKeysButton
                  size="small"
                  variant="outlined"
                  aria-label="open hotkeys dialog"
                  onClick={hotKeysDialogActions.open}
                >
                  alt + /
                </HotKeysButton>
              </Tooltip>
            </FlexBox>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Cambiar tema" arrow>
              <IconButton color="info" edge="end" size="large" onClick={themeActions.toggle}>
                <ThemeIcon />
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Notificaciones" arrow>
              <IconButton
                color="info"
                edge="end"
                size="large"
                component={Link}
                to={'/notifications'}
              >
                <Badge badgeContent={4} max={99} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Opciones de usuario" arrow>
              <IconButton color="info" edge="end" size="large" component={Link} to={'/profile'}>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
