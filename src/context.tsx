import react, { useState, createContext, ReactNode } from "react"

export interface UserProp {
    sessionid: string
    username: string
}

interface ContextProp {
    user: UserProp | undefined
    setUser: (user: UserProp | undefined) => void
}

export const Context = createContext({} as ContextProp)

interface UserProviderProp {
    children: ReactNode
}

const UserProvider = ({ children }: UserProviderProp) => {
    const [user, setUser] = useState<undefined | UserProp>()

    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider
