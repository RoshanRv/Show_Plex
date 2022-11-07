import { useState,useEffect } from "react";

import React from 'react'
import { persistState } from "../helpers";
import API from '../API'

export const useFetchMovie = (movieId) => {
    const [state,setState]=useState({})
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)

    let acty=[]
    let i=0

    const fetchData = async()=>{
        try{
            setLoading(true)
            setError(false)

            const movie = await API.fetchMovie(movieId)
            const credit = await API.fetchCredits(movieId)
            const directors = credit.crew.filter(member=>member.job==="Director")

            for(i=0;i<20;i++){
                if(credit.cast[i]!=undefined&&(credit.cast[i].profile_path)&& (credit.cast[i].name)){
                    acty.push(credit.cast[i])
                }
            }

            setState({
                ...movie,
                actors: acty,
                directors
            })

            setLoading(false)

        }catch(error){
            setError(true)
        }
    }

    useEffect(()=>{

        const sessionState = persistState(movieId)
        if(sessionState){
            setState(sessionState)
            setLoading(false)
            return
        }

        fetchData()

    },[movieId])

    useEffect(()=>{
        if(state.title)sessionStorage.setItem(movieId,JSON.stringify(state))

    },[movieId,state])

    return {state,loading,error}

    
}

