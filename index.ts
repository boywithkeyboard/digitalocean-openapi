import createClient from 'openapi-fetch'
import { paths as v2_paths } from './third_party/v2'

export type ClientV2 = ReturnType<typeof createClient<v2_paths>>

export function createClientV2({ token }: { token: string }) {
  return createClient<v2_paths>({
    baseUrl: 'https://api.digitalocean.com',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
