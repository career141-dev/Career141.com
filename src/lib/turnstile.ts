const TURNSTILE_TEST_SITE_KEY = '1x00000000000000000000AA'

export function getTurnstileSiteKey(): string {
  const configuredSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim()

  if (configuredSiteKey) {
    return configuredSiteKey
  }

  if (process.env.NODE_ENV !== 'production') {
    return TURNSTILE_TEST_SITE_KEY
  }

  return ''
}