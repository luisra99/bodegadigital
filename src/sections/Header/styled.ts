import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const HotKeysButton = styled(Button)(({ theme }) => ({
  height: 'fit-content',
  alignSelf: 'center',
  marginRight: theme.spacing(1),
  borderColor: theme.palette.text.disabled,
  '&:hover': {
    borderColor: theme.palette.text.disabled,
  },
  color: theme.palette.text.disabled,
}));
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#29539b',
  backgroundImage: 'linear-gradient(357deg,#1e3b70 0,#29539b 74%)',
}));

export { HotKeysButton, StyledAppBar };
