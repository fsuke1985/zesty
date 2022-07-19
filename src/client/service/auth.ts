import client from '~/service/apiClient'

export const loginrequest = (payload: any) => {
    client.post('/', payload).then((res: any) => res.data)
}