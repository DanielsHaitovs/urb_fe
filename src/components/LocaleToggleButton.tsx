'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { setLocale } from '@/actions/setLocale';
import { defaultLocale, getNextLocale, isLocale } from '@/i18n/config';

export function LocaleToggleButton() {
  const locale = useLocale();
  const activeLocale = isLocale(locale) ? locale : defaultLocale;
  const nextLocale = getNextLocale(activeLocale);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await setLocale(nextLocale);
    });
  };

  return (
    <button type="button" onClick={handleClick} disabled={isPending}>
      {isPending ? 'Switching...' : `Switch to ${nextLocale.toUpperCase()}`}
    </button>
  );
}
