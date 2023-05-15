import { atom, useRecoilState } from 'recoil';

import { Themes } from '@/theme/types';

import type { AtomEffectParams } from '../types';
import type { Actions } from './types';

const themeModeState = atom({
  key: 'theme-mode-state',
  default: 'dark' as Themes,
  effects: [synchronizeWithLocalStorage],
});

function synchronizeWithLocalStorage({ setSelf, onSet }: AtomEffectParams) {
  const storedTheme = localStorage.getItem('theme-mode');
  storedTheme && setSelf(storedTheme);
  onSet((value: Themes) => localStorage.setItem('theme-mode', value));
}

function useTheme(): [Themes, Actions] {
  const [themeMode, setThemeMode] = useRecoilState(themeModeState);

  function toggle() {
    setThemeMode((mode: Themes) => {
      const themeMeta = document.querySelector('meta[name="theme-color"]');
      if (mode === Themes.DARK) {
        themeMeta && themeMeta.setAttribute('content', '#FAFAFA');
        return Themes.LIGHT;
      } else {
        themeMeta && themeMeta.setAttribute('content', '#111111');
        return Themes.DARK;
      }
    });
  }

  return [themeMode, { toggle }];
}

export default useTheme;
