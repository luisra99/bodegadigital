import './Header.sass';
import HeaderToolbar from './components/HeaderToolbar';
import { StyledAppBar } from './styled';

import ThemeIcon from '@mui/icons-material/InvertColors';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { FlexBox } from '@/shared/components/styled';
import { useSession } from '@/store/hotkeys';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';

function Header() {
  const [, sidebarActions] = useSidebar();
  const [, themeActions] = useTheme();
  const [sessionState, ,] = useSession();

  return (
    <StyledAppBar color="default" elevation={1} position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
        <FlexBox sx={{ alignItems: 'center' }}>
          {sessionState && (
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="start"
              color="info"
              aria-label="menu"
              sx={{
                mr: 1,
                color: '#fff',
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </FlexBox>

        <FlexBox>
          <Tooltip className="header-button" title="Cambiar tema" arrow>
            <IconButton color="info" edge="end" size="large" onClick={themeActions.toggle}>
              <ThemeIcon />
            </IconButton>
          </Tooltip>
          <HeaderToolbar />
        </FlexBox>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
