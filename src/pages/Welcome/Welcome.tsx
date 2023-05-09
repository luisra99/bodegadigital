import { useState } from 'react';
import { lazy, Suspense } from 'react';

import useOrientation from '@/hooks/useOrientation';
import Loading from '@/shared/components/Loading';

function Welcome() {
  const isPortrait = useOrientation();

  //Consultar si la sesion esta configurada
  const [sesionIsConfig, setConfig] = useState(true);

  const MyLazyComponent = lazy(() => import('@/pages/SignUp/SignUp'));

  return (
    <>
      {sesionIsConfig ? (
        <h1 onClick={() => setConfig(false)} style={{ textAlign: 'center' }}>
          Bienvenido
        </h1>
      ) : (
        <Suspense fallback={<Loading />}>
          <MyLazyComponent />
        </Suspense>
      )}
    </>
  );
}

export default Welcome;
