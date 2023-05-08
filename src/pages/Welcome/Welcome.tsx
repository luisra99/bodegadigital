import { useState } from 'react';

import useOrientation from '@/hooks/useOrientation';
import Meta from '@/shared/components/Meta';
import { FullSizeCenteredFlexBox } from '@/shared/components/styled';

import SignUp from '../SignUp';
import muiLogo from './logos/mui.svg';
import pwaLogo from './logos/pwa.svg';
import reactLogo from './logos/react_ed.svg';
import recoilLogo from './logos/recoil.svg';
import rrLogo from './logos/rr.svg';
import tsLogo from './logos/ts.svg';
import viteLogo from './logos/vite.svg';
import { Image } from './styled';

function Welcome() {
  const isPortrait = useOrientation();

  const width = isPortrait ? '40%' : '30%';
  const height = isPortrait ? '30%' : '40%';
  //Consultar si la sesion esta configurada
  const [sesionIsConfig, setConfig] = useState(true);
  return (
    <>
      <Meta title="Welcome" />
      {sesionIsConfig ? (
        <h1 onClick={() => setConfig(false)} style={{ textAlign: 'center' }}>
          Bienvenido
        </h1>
      ) : (
        <SignUp />
      )}
    </>
  );
}

export default Welcome;
