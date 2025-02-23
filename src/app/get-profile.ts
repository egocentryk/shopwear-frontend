'use server'

import { get } from './common/util/fetch'

export default async function getProfile() {
  return get('users/profile')
}
