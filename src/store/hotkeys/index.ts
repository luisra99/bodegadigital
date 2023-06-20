import { atom, useRecoilState } from 'recoil';

import type { Actions, Session, SessionActions } from './types';

const hotKeysDialogState = atom<boolean>({
  key: 'hotkeys-dialog-state',
  default: false,
});
const sessionState = atom<Session>({
  key: 'session-state',
  default: {
    isLoggedIn: false,
  },
});

export function useHotKeysDialog(): [boolean, Actions] {
  const [isOpen, setIsOpen] = useRecoilState(hotKeysDialogState);

  function toggle() {
    setIsOpen((isOpen: boolean) => !isOpen);
  }

  function close() {
    setIsOpen(false);
  }

  function open() {
    setIsOpen(true);
  }

  return [isOpen, { toggle, close, open }];
}

export function useSession(): [boolean, SessionActions] {
  const [session, setSession] = useRecoilState(sessionState);

  function close() {
    const session = {
      isLoggedIn: false,
    };
    setSession(session);
  }

  function create(params: any) {
    params['isLoggedIn'] = true;
    setSession(params);
  }

  return [session.isLoggedIn, { close, create }];
}
