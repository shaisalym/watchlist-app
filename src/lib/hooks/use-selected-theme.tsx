import { colorScheme, useColorScheme } from 'nativewind';
import React, { useState } from 'react';

export type ColorSchemeType = 'light' | 'dark' | 'system';
const SELECTED_THEME = 'SELECTED_THEME';

export const useSelectedTheme = () => {
  const { colorScheme: _color, setColorScheme } = useColorScheme();
  const [theme, _setTheme] = useState<ColorSchemeType>('system');

  const setSelectedTheme = React.useCallback(
    (t: ColorSchemeType) => {
      setColorScheme(t);
      _setTheme(t);
    },
    [setColorScheme]
  );

  return { selectedTheme: theme, setSelectedTheme } as const;
};

// Removed loadSelectedTheme because no storage anymore
