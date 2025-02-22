'use server'

import { get } from './util/fetch'

export default async function getProfile() {
  return get('users/profile')
}
