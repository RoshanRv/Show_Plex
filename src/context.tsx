import react, { useState, createContext, useContext, ReactNode } from "react"

export const Context = createContext()

interface UserProviderProp {
    children: ReactNode
}

const UserProvider = ({ children }: UserProviderProp) => {
    const [state, setState] = useState(undefined)

    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider
