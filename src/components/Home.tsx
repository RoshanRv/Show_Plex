import React from "react"
import { useState, useEffect } from "react"
import { useFetchHome } from "@hooks/useFetchHome"

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config"
import no_img from "@images/no_image.png"
// Components
import HomeHero from "@components/HomeHero"
import Grid from "@components/Grid"
import Thumbnail from "@components/Thumbnail"
import Spinner from "@components/Spinner"
import SearchBar from "@components/SearchBar"
import LoadMore from "@components/LoadMore"

const Home = () => {
    const [hero, setHero] = useState(0)

    const { state, loading, error, setSearchTerm, searchTerm, setIsLoadMore } =
        useFetchHome()

    return (
        <div>
            {state.results[hero] && !searchTerm && (
                <HomeHero
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[hero].backdrop_path}`}
                    title={`${state.results[hero].title}`}
                    overview={`${state.results[hero].overview}`}
                    callback={setHero}
                    stateLength={state.results.length}
                />
            )}
            <SearchBar searchText={setSearchTerm} />
            <Grid
                header={
                    !searchTerm
                        ? "Popular Movies"
                        : `Searching Result for ${searchTerm}`
                }
            >
                {state.results.map((movie) => {
                    return (
                        <Thumbnail
                            key={movie.id}
                            image={
                                movie.poster_path
                                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                    : no_img
                            }
                            clickable
                            movieId={movie.id}
                            movieName={movie.title}
                        />
                    )
                })}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <LoadMore
                    text="Load More"
                    callback={() => setIsLoadMore(true)}
                    color="bg-gradient-to-r from-red-800 via-red-600 to-red-800"
                />
            )}
        </div>
    )
}

export default Home
