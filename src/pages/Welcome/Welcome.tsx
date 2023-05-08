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
        <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
          <Image alt="react-router" src={rrLogo} />
          <Image alt="vite" src={viteLogo} />
          <Image alt="typescript" src={tsLogo} />
          <Image
            alt="react"
            src={reactLogo}
            sx={{ width, height }}
            onClick={() => setConfig(false)}
          />
          <Image alt="mui" src={muiLogo} />
          <Image alt="recoil" src={recoilLogo} />
          <Image alt="pwa" src={pwaLogo} />
        </FullSizeCenteredFlexBox>
      ) : (
        <SignUp />
      )}
    </>
  );
}

export default Welcome;
