import react, { useState, createContext, ReactNode } from "react"

interface ContextProp {
    state: string
    setState: (user: string) => void
}

export const Context = createContext({} as ContextProp)

interface UserProviderProp {
    children: ReactNode
}

const UserProvider = ({ children }: UserProviderProp) => {
    const [state, setState] = useState(" ")

    return (
        <Context.Provider value={{ state, setState }}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider
