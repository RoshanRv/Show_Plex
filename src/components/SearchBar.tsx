import React from "react"
import { useState, useEffect, useRef } from "react"
import search from "../images/search-icon.svg"

interface SearchbarProps {
    searchText: (value: string) => void
}

const SearchBar = ({ searchText }: SearchbarProps) => {
    const [state, setState] = useState("")
    const initial = useRef(true)

    useEffect(() => {
        if (initial.current) {
            initial.current = false
            return
        }

        const Timer = setTimeout(() => {
            searchText(state)
        }, 700)

        return () => clearTimeout(Timer)
    }, [searchText, state])

    return (
        <div className="bg-gradient-to-r from-red-800 via-red-600 to-red-800 border-t-2 border-b-4 border-white mt-4 md:mt-1 xl:mt-11">
            <div className="max-w-screen-lg m-auto p-4 flex  relative ">
                <img
                    src={search}
                    alt="Search Icon "
                    className="w-8 h-8 absolute left-8 top-7 md:left-12 text-black bottom-6 fill-red-600"
                />
                <input
                    type="text"
                    className="w-full md:mx-4 mx-0 rounded-2xl px-4 py-3 pl-16 font-display text-white text-lg bg-black border-2 border-white"
                    placeholder="Search"
                    value={state}
                    onChange={(e) => setState(e.currentTarget.value)}
                />
            </div>
        </div>
    )
}

export default SearchBar
