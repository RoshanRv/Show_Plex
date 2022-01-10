import react,{useState, createContext, useContext} from "react";

export const Context = createContext()

const UserProvider =({children})=>{
    const [state,setState]=useState(undefined)

    

    return(
        <Context.Provider value={[state,setState]}>{children}</Context.Provider>
    )
}

export default UserProvider