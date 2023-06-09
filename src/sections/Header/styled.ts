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
  backgroundImage: 'linear-gradient(357deg, rgb(26, 122, 61) 0px, rgb(72, 177, 95) 74%)',
}));

export { HotKeysButton, StyledAppBar };
