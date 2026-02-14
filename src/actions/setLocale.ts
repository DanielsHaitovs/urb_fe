'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { Locale, LOCALE_COOKIE } from '@/i18n/config'
// import { isLocale, Locale, LOCALE_COOKIE } from '@/i18n/config'

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

export async function setLocale(locale: Locale): Promise<void> {
  // if (!isLocale(locale)) {
  //   throw new Error(`Unsupported locale: ${locale}`)
  // }

  const store = await cookies()

  store.set({
    name: LOCALE_COOKIE,
    value: locale,
    path: '/',
    maxAge: ONE_YEAR_SECONDS,
    httpOnly: true,
    sameSite: 'lax',
  })

  revalidatePath('/', 'layout')
}
