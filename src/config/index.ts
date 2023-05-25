import isMobile from '@/utils/is-mobile';

import type { Notifications } from './types';

const title = 'Bodega Digital';

const email = 'soportebodegadigital@xetid.cu';

const repository = 'https://xetid.cu';

const messages = {
  app: {
    crash: {
      title: 'Ups... Lo sentimos, algo fue mal con la aplicación. Usted puede:',
      options: {
        email: `contactar con soporte via correo - ${email}`,
        reset: 'Reiniciar la aplicación',
      },
    },
  },
  loader: {
    fail: 'Hmmmmm, algo fue mal con la carga de este componente... Quizás sea una buena idea intentarlo mas tarde',
  },
  images: {
    failed: 'algo fue mal mientras se cargaba esta imagen :(',
  },
  404: 'Amigo? Que estas buscando?',
};

const dateFormat = 'MMMM DD, YYYY';

const notifications: Notifications = {
  options: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 6000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/cover.png',
  description: 'Starter kit for modern web applications',
};
const giphy404 = 'https://giphy.com/embed/xTiN0L7EW5trfOvEk0';

export {
  loader,
  notifications,
  dateFormat,
  messages,
  repository,
  email,
  title,
  defaultMetaTags,
  giphy404,
};
