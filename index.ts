import createOpenAPIClient from 'openapi-fetch'
import { paths as v2_paths } from './third_party/v2'

export type Client = ReturnType<typeof createOpenAPIClient<v2_paths>>

export function createClient({ token }: { token: string }) {
  return createOpenAPIClient<v2_paths>({
    baseUrl: 'https://api.digitalocean.com',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
