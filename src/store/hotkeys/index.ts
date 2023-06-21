import type { Actions, Session, SessionActions } from './types';

import { atom, useRecoilState } from 'recoil';

const hotKeysDialogState = atom<boolean>({
  key: 'hotkeys-dialog-state',
  default: false,
});
const sessionState = atom<Session>({
  key: 'session-state',
  default: {
    isLoggedIn: false,
    profile: null,
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

export function useSession(): [boolean, any, SessionActions] {
  const [session, setSession] = useRecoilState(sessionState);

  function close() {
    const session = {
      isLoggedIn: false,
      profile: null,
    };
    setSession(session);
  }

  function create(params: any) {
    params['isLoggedIn'] = true;
    setSession(params);
  }

  return [session.isLoggedIn, session.profile, { close, create }];
}
