import client from '~/service/apiClient'

export const loginrequest = (payload: any) => {
    client.post('/api/v1/hello', payload).then((res: any) => res.data)
}