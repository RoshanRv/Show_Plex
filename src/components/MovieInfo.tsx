import React, { useContext, useState } from "react"
import {
    IMAGE_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    PRODUCTION_SIZE,
} from "src/config"
import API from "src/API"
import Rate from "@components/Rate"
import { Context } from "src/context"
import ProductionHouse from "@components/ProductionHouse"
import { MovieState } from "@hooks/useFetchMovie"

interface MovieInfoProp {
    movieinfo: MovieState
}

const MovieInfo = ({ movieinfo }: MovieInfoProp) => {
    const [res, setRes] = useState(5)

    const { user } = useContext(Context)

    const handleRate = async (value: number) => {
        try {
            if (!user) throw new Error("User Not Logged In")
            const rate = await API.rateMovie(
                user.sessionid,
                movieinfo.id,
                value
            )
            setRes(rate.status_code)

            const Reset = setTimeout(() => {
                setRes(5)
            }, 1000)

            return () => clearTimeout(Reset)
        } catch (err) {
            setRes(0)

            const Reset = setTimeout(() => {
                setRes(5)
            }, 1500)

            return () => clearTimeout(Reset)
        }
    }

    return (
        <div className="">
            <img
                src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movieinfo.backdrop_path}`}
                alt=""
                className="absolute top-0 -z-10 w-full h-[220vh] md:h-[190vh]  xl:h-[152vh] object-cover ani "
            />
            <div className="max-w-screen-lg mx-auto h-max px-2 mb-6 z-50">
                <div className=" bg-gray-900/60 rounded-xl  mt-8">
                    <img
                        src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movieinfo.poster_path}`}
                        alt=""
                        className="lg:h-[60vh] h-[50vh] rounded-xl  mx-auto pt-2 ani"
                    />
                    <div className="grow px-4 py-6 text-white flex flex-col items-stretch">
                        <div className="flex justify-between">
                            <h1 className="md:text-4xl text-2xl font-display font-medium ">
                                {movieinfo.title}
                            </h1>
                            <a
                                href={`https://www.imdb.com/title/${movieinfo.imdb_id}`}
                                target="_blank"
                            >
                                <img
                                    src={
                                        "https://www.pngkit.com/png/full/193-1934510_michael-snyman-imdb-imdb-logo-black-and-white.png"
                                    }
                                    className="md:w-20 md:h-10 w-10 h-5 bg-yellow-500 rounded-lg"
                                />
                            </a>
                        </div>

                        <h4 className="md:text-xl text-lg font-display font-medium mt-4">
                            PLOT
                        </h4>
                        <h4 className="md:text-lg text-md font-display font-medium mt-2">
                            {movieinfo.overview}
                        </h4>
                        <div className="flex mt-6 md:justify-around justify-between ">
                            <div className="">
                                <h1 className="font-display md:text-xl text-lg">
                                    RATING
                                </h1>
                                <h1 className="font-display text-xl bg-white text-black font-black rounded-full w-[45px] text-center p-2 my-2 mx-auto">
                                    {movieinfo.vote_average}
                                </h1>
                            </div>
                            <div>
                                <h1 className="font-display md:text-xl text-lg">
                                    {movieinfo.directors.length > 1
                                        ? "DIRECTORS"
                                        : "DIRECTOR"}
                                </h1>
                                <div className="grid grid-cols-2 gap-x-4">
                                    {movieinfo.directors.map((mem) => (
                                        <h1
                                            key={mem.credit_id}
                                            className="font-display md:text-lg text-md md:py-2 py-1 grow"
                                        >
                                            {mem.name}
                                        </h1>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="md:flex justify-around mt-4">
                            <Rate callback={handleRate} result={res} />
                            <div className="font-display ">
                                <h1 className="md:text-xl text-lg p-2 ">
                                    {movieinfo.genres.length > 1
                                        ? "GENRES"
                                        : "GENRE"}
                                </h1>
                                <div className="grid grid-cols-2">
                                    {movieinfo.genres.map((genre) => (
                                        <h2
                                            key={genre.id}
                                            className="md:text-lg text-md p-1 pr-2 "
                                        >
                                            {genre.name}
                                        </h2>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4 md:mt-8  font-display">
                            <h1 className="my-6 md:text-xl text-lg">
                                PRODUCTION HOUSES
                            </h1>
                            <div className="flex md:justify-around justify-between mx-auto items-center">
                                {movieinfo.production_companies.map(
                                    (production) =>
                                        production.logo_path && (
                                            <ProductionHouse
                                                key={production.id}
                                                image={`${IMAGE_BASE_URL}${PRODUCTION_SIZE}${production.logo_path}`}
                                                name={production.name}
                                            />
                                        )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo
