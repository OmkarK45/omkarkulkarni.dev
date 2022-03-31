import { useRegisterActions } from 'kbar';
import { useTheme } from 'next-themes';
import { useContext, useEffect, useState } from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

export function useThemeActions() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useRegisterActions([
    {
      id: 'theme',
      name: 'Change theme',
      keywords: 'interface colors dark light',
      section: 'Preferences',
      icon: HiOutlineMoon
    },
    {
      id: 'theme-dark',
      name: 'Dark',
      keywords: 'dark theme',
      section: '',
      perform: (actionImp) => {
        setTheme('dark');
      },
      parent: 'theme',
      icon: HiOutlineMoon
    },
    {
      id: 'theme-light',
      name: 'Light',
      keywords: 'light theme',
      section: '',
      perform: (actionImp) => {
        setTheme('light');
      },
      parent: 'theme',
      icon: HiOutlineSun
    }
  ]);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
}
