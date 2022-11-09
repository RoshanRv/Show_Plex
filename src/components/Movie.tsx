import React from "react"
import { useParams } from "react-router"
import Spinner from "@components/Spinner"
import Grid from "@components/Grid"
import { POSTER_SIZE, IMAGE_BASE_URL } from "src/config"
import { useFetchMovie } from "@hooks/useFetchMovie"
import BreadCrumb from "@components/BreadCrumb"
import MovieInfo from "@components/MovieInfo"
import MovieInfoBar from "@components/MovieInfoBar"
import Actors from "@components/Actors"
import no_img from "@images/no_image.png"
import NotFound from "@components/NotFound"

const Movie = () => {
    const { movieId }: any = useParams()
    const { state: movie, loading, error } = useFetchMovie(movieId)

    if (loading) return <Spinner />

    if (error) return <NotFound />

    return (
        <div className="">
            <BreadCrumb title={movie.title} />
            <MovieInfo movieinfo={movie} />
            <MovieInfoBar
                runtime={movie.runtime}
                release_date={movie.release_date}
                revenue={movie.revenue}
            />
            <Grid header="Actors">
                {movie.actors.map((actor, i) => (
                    <Actors
                        key={actor != undefined ? actor.credit_id : i}
                        img={
                            actor != undefined && actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : no_img
                        }
                        name={actor.name || " "}
                        char={actor.character || " "}
                    />
                ))}
            </Grid>
        </div>
    )
}

export default Movie
