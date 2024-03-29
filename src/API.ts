import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL,
    API_KEY,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_ID_URL,
} from "./config"

const defaultConfig = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
}

export interface Movies {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}

export interface Genre {
    id: number
    name: string
}

export interface ProductionCompany {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export interface Movie {
    imdb_id: number
    backdrop_path: string
    id: number
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    title: string
    vote_average: number
    vote_count: number
    budget: number
    runtime: number
    revenue: number
    release_date: number
    genres: Genre[]
    production_companies: ProductionCompany[]
}

export interface Cast {
    character: string
    credit_id: string
    name: string
    profile_path: string
}

export interface Crew {
    job: string
    name: string
    credit_id: number
}

export interface Credits {
    id: number
    cast: Cast[]
    crew: Crew[]
}

const apiSettings = {
    fetchMovies: async (searchTerm: string, page: number): Promise<Movies> => {
        const endpoint = searchTerm
            ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
            : `${POPULAR_BASE_URL}&page=${page}`
        return await (await fetch(endpoint)).json()
    },
    fetchMovie: async (movieId: string): Promise<Movie> => {
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
        return await (await fetch(endpoint)).json()
    },
    fetchCredits: async (movieId: string): Promise<Credits> => {
        const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
        return await (await fetch(creditsEndpoint)).json()
    },
    // Bonus material below for login
    getRequestToken: async () => {
        const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json()
        return reqToken.request_token
    },
    authenticate: async (
        requestToken: string,
        username: string,
        password: string
    ) => {
        const bodyData = {
            username,
            password,
            request_token: requestToken,
        }
        // First authenticate the requestToken
        const data = await (
            await fetch(LOGIN_URL, {
                ...defaultConfig,
                body: JSON.stringify(bodyData),
            })
        ).json()
        // Then get the sessionId with the requestToken
        if (data.success) {
            const sessionId = await (
                await fetch(SESSION_ID_URL, {
                    ...defaultConfig,
                    body: JSON.stringify({ request_token: requestToken }),
                })
            ).json()
            return sessionId
        }
    },
    rateMovie: async (
        sessionId: string | undefined,
        movieId: number,
        value: number
    ) => {
        const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`

        const rating = await (
            await fetch(endpoint, {
                ...defaultConfig,
                body: JSON.stringify({ value }),
            })
        ).json()

        return rating
    },
}

export default apiSettings
