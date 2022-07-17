import client from '~/service/apiClient'

export const loginrequest = (payload: any) => {
    client.post('/auth/register', payload).then((res: any) => res.data)
}