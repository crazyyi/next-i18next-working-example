import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const loadTranslation = async (locale: string, ...filenames: string[]) => {
      return {
         ...(await serverSideTranslations(locale, [...filenames])),
      }
}
