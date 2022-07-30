import React, { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'

const UserContext = createContext({/* todo: initial data */});

interface User {
    name: string,
    age: number
}
interface Props {
    currentUser: User,
    children?: React.ReactNode
}

export const UserProvider = (props: Props) => {
// debug props
console.log(props)
    const value = {};
    return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
    return useContext(UserContext);
}