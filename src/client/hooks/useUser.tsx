import React, { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'

const UserContext = createContext({/* todo: initial data */});

export interface User {
    name: string,
    age: number
}
interface Props {
    pageProps: any,
    currentUser: User,
    children?: React.ReactNode
}

export const UserProvider = (props: Props) => {
    const [user, setUser] = useState<User>(props?.currentUser);

    const value = {user, setUser};
    return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
    return useContext(UserContext);
}