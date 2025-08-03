import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

export async function getTranslations(locale: string, ns: string[] = ['common']) {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (lng: string, namespace: string) =>
          import(`../public/locales/${lng}/${namespace}.json`)
      )
    )
    .init({
      lng: locale,
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
    });
  return i18nInstance;
}
