import { cookies } from 'next/headers'
import { AUTHENTICATION_COOKIE } from './auth-cookie'

export default function authenticated() {
  // @ts-expect-error
  return !!cookies().get(AUTHENTICATION_COOKIE)?.value
}
