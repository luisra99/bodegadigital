type Actions = {
  toggle: () => void;
  close: () => void;
  open: () => void;
};
type SessionActions = {
  create: (params?: any) => void;
  close: () => void;
};
type Session = {
  tokenResponse?: string;
  idToken?: string;
  isLoggedIn: boolean;
  profile: any;
};
export type { Actions, SessionActions, Session };
