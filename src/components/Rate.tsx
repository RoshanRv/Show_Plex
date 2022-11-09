import React, { useState, useContext } from "react"
import { Context } from "src/context"
import LoadMore from "@components/LoadMore"

interface RateProps {
    result: number
    callback: (value: number) => void
}

const Rate = ({ callback, result }: RateProps) => {
    const [value, setValue] = useState(5)

    return (
        <div className=" text-center md:w-[35%] mt-4">
            <div className="flex">
                <div className="grow">
                    <h1 className="font-display md:text-xl text-lg">
                        YOUR RATING: {value}
                    </h1>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={value}
                        onChange={(e) =>
                            setValue(Number(e.currentTarget.value))
                        }
                        className="bg-black text-red-500 w-[100px] range"
                    />
                </div>
                <button
                    onClick={() => callback(value)}
                    className="border-2 border-white bg-white text-black my-auto px-2 py-1 ml-2 h-max grow font-display text-lg font-bold rounded-lg"
                >
                    Rate
                </button>
            </div>
            <h1 className="font-display md:text-xl text-lg">
                {result == 0
                    ? "LOGIN TO RATE MOVIE"
                    : result == 12
                    ? "RATING UPDATED"
                    : result == 1 && "RATED"}
            </h1>
        </div>
    )
}

export default Rate
