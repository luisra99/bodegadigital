import { Link } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThemeIcon from '@mui/icons-material/InvertColors';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { useProfileData } from '@/hooks/useProfileData';
import { FlexBox } from '@/shared/components/styled';
import useHotKeysDialog from '@/store/hotkeys';
import useNotifications from '@/store/notifications';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';
import { showNotification } from '@/utils/notification/notification';

import { StyledAppBar } from './styled';

function Header() {
  const [, sidebarActions] = useSidebar();
  const [, themeActions] = useTheme();
  const [, notificationsActions] = useNotifications();
  const [, hotKeysDialogActions] = useHotKeysDialog();
  // const [session, setSession] = useState(true);
  const {
    profile: {
      profile: { nombre, foto },
    },
    LOG,
    state,
  } = useProfileData();
  return (
    <StyledAppBar color="default" elevation={1} position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
        <FlexBox sx={{ alignItems: 'center' }}>
          <IconButton
            onClick={sidebarActions.toggle}
            size="large"
            edge="start"
            color="info"
            aria-label="menu"
            sx={{
              mr: 1,
              color: '#fff',
              // visibility: state.isAuthenticated ? 'visible' : 'hidden',
            }}
            // disabled={!state.isAuthenticated}
          >
            <MenuIcon />
          </IconButton>
          <Button
            onClick={() =>
              showNotification(notificationsActions, {
                type: 'info',
                title: 'Producto nuevo en la TRD "Los Combatientes"',
                subTitle: 'Productos',
                content: 'Aceite, Pan, Azucar',
                secondarySubTitle: 'Distribucion',
                secondaryContent: 'Por CDR',
                advice: 'Miercoles 16:00h',
                price: 250.0,
              })
            }
            color="info"
            sx={{ color: '#fff', display: { xs: 'none', md: 'block' } }}
          >
            Probar Aviso
          </Button>
        </FlexBox>
        <FlexBox>
          <Tooltip title="Cambiar tema" arrow sx={{ color: '#fff' }}>
            <IconButton color="info" edge="end" size="large" onClick={themeActions.toggle}>
              <ThemeIcon />
            </IconButton>
          </Tooltip>

          {state.isAuthenticated ? (
            <>
              <Tooltip title="Notificaciones" arrow sx={{ color: '#fff' }}>
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

              <Tooltip title="Opciones de usuario" arrow sx={{ color: '#fff' }}>
                {/* <IconButton color="info" edge="end" size="large" component={Link} to={'/profile'}> */}
                <IconButton color="info" edge="end" size="large" component={Link} to={'/profile'}>
                  <AccountCircleIcon />
                  <Avatar alt="asd" src={'/sd'} />
                </IconButton>
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Iniciar sesion" arrow sx={{ color: '#fff' }}>
                <IconButton
                  color="info"
                  edge="end"
                  size="large"
                  onClick={() => {
                    LOG().then((result: any) => {
                      console.log(result);
                      // getBasicUserInfo();
                    });
                  }}
                >
                  <LoginIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Opciones de usuario" arrow sx={{ color: '#fff' }}>
                {/* <IconButton color="info" edge="end" size="large" component={Link} to={'/profile'}> */}
                <IconButton color="info" edge="end" size="large" component={Link} to={'/profile'}>
                  {/* <AccountCircleIcon /> */}
                  <Avatar alt={nombre} src={foto || 'none'} />
                </IconButton>
              </Tooltip>
            </>
          )}
        </FlexBox>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
