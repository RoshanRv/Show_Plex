import { useState, useEffect } from "react"
import API from "src/API"
import { Movie } from "src/API"
import { persistState } from "src/helpers"

const initialState = {
    page: 0,
    results: [] as Movie[],
    total_results: 0,
    total_pages: 0,
}

export const useFetchHome = () => {
    const [isLoadMore, setIsLoadMore] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchMovies = async (page: number, searchtitle = "") => {
        try {
            setError(false)
            setLoading(true)

            const movies = await API.fetchMovies(searchtitle, page)

            setState((pre) => ({
                ...movies,
                results:
                    page > 1
                        ? [...pre.results, ...movies.results]
                        : [...movies.results],
            }))
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (!searchTerm) {
            const sessionState = persistState("homeState")

            if (sessionState) {
                setState(sessionState)
                return
            }
        }
        setState(initialState)
        fetchMovies(1, searchTerm)
    }, [searchTerm])

    useEffect(() => {
        if (!isLoadMore) return
        fetchMovies(state.page + 1, searchTerm)
        setIsLoadMore(false)
    }, [isLoadMore])

    useEffect(() => {
        if (!searchTerm && state.results.length > 1) {
            sessionStorage.setItem("homeState", JSON.stringify(state))
        }
    }, [searchTerm, state])

    return { state, loading, error, setSearchTerm, searchTerm, setIsLoadMore }
}
