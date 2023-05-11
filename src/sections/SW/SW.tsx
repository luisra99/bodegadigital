import { useCallback, useEffect, useRef } from 'react';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import type { SnackbarKey } from 'notistack';
import { useRegisterSW } from 'virtual:pwa-register/react';

import useNotifications from '@/store/notifications';

// TODO (Suren): this should be a custom hook :)
function SW() {
  const [, notificationsActions] = useNotifications();
  const notificationKey = useRef<SnackbarKey | null>(null);
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = useCallback(() => {
    setOfflineReady(false);
    setNeedRefresh(false);

    if (notificationKey.current) {
      notificationsActions.close(notificationKey.current);
    }
  }, [setOfflineReady, setNeedRefresh, notificationsActions]);

  useEffect(() => {
    const id = Math.random().toString();
    if (offlineReady) {
      notificationsActions.push(
        {
          options: {
            autoHideDuration: 4500,
            content: (
              <Alert severity="success">
                La aplicación esta lista para funcionar desconectada.
              </Alert>
            ),
          },
        },
        id,
      );
    } else if (needRefresh) {
      notificationKey.current = notificationsActions.push(
        {
          message: 'Esta página tiene contenido nuevo, creo que debería recargarla.',
          options: {
            variant: 'warning',
            persist: true,
            action: (
              <>
                <Button onClick={() => updateServiceWorker(true)}>Recargar</Button>
                <Button onClick={close}>Cerrar</Button>
              </>
            ),
          },
        },
        id,
      );
    }
  }, [close, needRefresh, offlineReady, notificationsActions, updateServiceWorker]);

  return null;
}

export default SW;
