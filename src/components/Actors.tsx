import React from "react"

interface ActorsProps {
    img: string
    name: string
    char: string
}

const Actors = ({ img, name, char }: ActorsProps) => {
    return (
        <div className="bg-black  border-4 border-red-700 rounded-lg mb-8 hover:border-red-500 shadow-lg shadow-red-700">
            <div className="   overflow-hidden">
                <img
                    src={img}
                    alt=""
                    className="hover:scale-110 transition-all duration-350 ani"
                />
            </div>
            <div className="z-10 b overflow-hidden text-white border-t-4 border-red-700 ">
                <h1 className="md:text-2xl text-lg text-white font-display mt-2 text-center">
                    {name}
                </h1>
                <h4 className="md:text-xl text-md text-white font-display text-center ">
                    {char}
                </h4>
            </div>
        </div>
    )
}

export default Actors
