import React from "react"
import { useContext, useState } from "react"
import { Context } from "src/context"
import { useNavigate } from "react-router-dom"

interface LogoutProp {
    vis: boolean
}

const Logout = ({ vis }: LogoutProp) => {
    const navigate = useNavigate()

    const { user, setUser } = useContext(Context)

    const handleLogout = () => {
        setUser(undefined)

        localStorage.removeItem("loginid")

        navigate("/")
    }

    return (
        <div
            className={` absolute bg-gray-900/30 top-[63px]  md:top-[89px] md:w-32 transition-all w-24  z-50 h-0 ${
                user != undefined && vis === true && "h-20 "
            } overflow-hidden `}
        >
            <h1
                className={`font-display text-lg md:text-2xl p-4 text-white bg-transparent text-center `}
                onClick={() => handleLogout()}
            >
                Logout
            </h1>
        </div>
    )
}
// ${!vis&&"hidden"} ${user==undefined&&('h-100 ')} ${(!vis|| user==undefined)&&'h-0'}

export default Logout
