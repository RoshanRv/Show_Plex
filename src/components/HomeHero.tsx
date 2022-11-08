import React from "react"
import { GrFormNext } from "react-icons/gr"
import { GrFormPrevious } from "react-icons/gr"

interface HomeHeroProps {
    image: string
    title: string
    overview: string
    stateLength: number
    callback: (e: (e: number) => number) => void
}

const HomeHero = ({
    image,
    title,
    overview,
    callback,
    stateLength,
}: HomeHeroProps) => {
    const handleNext = () => {
        callback((e: number) => {
            if (e < stateLength - 1) return e + 1
            return 0
        })
    }

    const handlePrevious = () => {
        callback((e: number) => {
            if (e > 0) return e - 1
            return stateLength - 1
        })
    }

    return (
        <>
            <div>
                <img
                    alt="banner"
                    src={image}
                    className=" md:w-[100%] h-screen  object-cover  ani absolute top-0 -z-10"
                />
                <div className="max-w-screen-lg mx-auto relative h-[86vh]  z-10">
                    {/* Previous Banner btn */}
                    <div
                        className="ml-2 text-white bg-white z-50 opacity-80 md:opacity-40 md:hover:opacity-100 h-max  p-1  cursor-pointer md:hover:scale-125 transition-all text-2xl md:text-3xl rounded-full w-max text-center absolute left-0 md:top-2/6 top-1/4"
                        onClick={() => handlePrevious()}
                    >
                        {" "}
                        <GrFormPrevious />{" "}
                    </div>
                    {/* Next Banner btn */}
                    <div
                        className="mr-2 text-white bg-white z-50 opacity-80 md:opacity-40 md:hover:opacity-100 h-max  p-1  cursor-pointer md:hover:scale-125 transition-all text-2xl md:text-3xl rounded-full w-max text-center  absolute right-0 md:top-2/6 top-1/4"
                        onClick={() => handleNext()}
                    >
                        {" "}
                        <GrFormNext />{" "}
                    </div>
                    <div className="absolute bottom-0 text-white max-w-screen-lg z-10 mx-2 ">
                        <h1 className="bg-gray-900/50  md:text-4xl xl:text-5xl text-2xl  px-2 pt-2 pb-3 font-display rounded-t-xl font-black z-10">
                            {title}
                        </h1>
                        <h3 className="bg-gray-900/50 px-2 py-3 lg:text-2xl md:text-xl text-md rounded-b-xl  font-display z-10">
                            {overview}
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}
//object-cover object-bottom

export default HomeHero
