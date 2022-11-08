import React from "react"
import { Movie } from "../API"
import { calcTime, convertMoney } from "../helpers"

interface MovieInfoBarProps {
    runtime: number
    release_date: number
    revenue: number
}

const MovieInfoBar = ({
    runtime,
    release_date,
    revenue,
}: MovieInfoBarProps) => {
    return (
        <div className="bg-black mt10 text-white p-2 border-t-2 border-b-2 border-white">
            <div className="max-w-screen-lg mx-auto md:flex  justify-around">
                <h1 className="bg-black text-white md:w-[400px] border-2 border-red-700 text-center p-3 m-3 md:mx-2 mx-auto rounded-2xl">
                    RUNTIME: {calcTime(runtime)}
                </h1>
                <h1 className="bg-black text-white md:w-[400px] border-2 border-red-700  text-center p-3 m-3 md:mx-2 mx-auto rounded-2xl">
                    RELEASE DATE: {release_date}
                </h1>
                <h1 className="bg-black text-white md:w-[400px] border-2 border-red-700  text-center p-3 m-3 md:mx-2 mx-auto rounded-2xl">
                    BOXOFFICE: {convertMoney(revenue)}
                </h1>
            </div>
        </div>
    )
}

export default MovieInfoBar
