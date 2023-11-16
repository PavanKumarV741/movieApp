import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../pages/MovieDetail.css'

function MovieDetail() {
    const {id}=useParams()
    const [currentMovie,setCurrentMovie]=useState({});

    const movieInfo=async ()=>{
        const movieData=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=01682d2fe1bb43f001fe43f6f5b3fae4&language=en-US`)
        console.log(movieData.data);//object
        setCurrentMovie(movieData.data)

    }
    useEffect(()=>{
        movieInfo()
    },[id])
  return (
    <>
    <div className='movieDetails'>
        <div className='poster_box'>
            <img src={`https://image.tmdb.org/t/p/original${currentMovie ? currentMovie.backdrop_path : ""}`}  alt="clicked Movie" className='backdropImg' />
            <img src={`https://image.tmdb.org/t/p/original${currentMovie ? currentMovie.poster_path : ""}`}  alt="clicked Movie" className='posterImg' />
        </div>
        <div className='movieDetailLeft'>
            <ul>
                <li >{`MovieTitle : ${currentMovie.title}`}</li>
                <li >{`Language : ${currentMovie.original_language}=>(hi=hindi,en=english)`}</li>
                <li >{`MovieRuntime : ${currentMovie.runtime}mins`}</li>
                <li >{`ReleaseDate : ${currentMovie.release_date} `}</li>
                <li >{`Popularity : ${currentMovie.popularity}`}</li>
                <li >{`tagline : ${currentMovie.tagline}`}</li>
                <li >{` ${currentMovie.vote_average}`}<img  height={15} style={{backgroundColor:'green'}} src="https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/star.png" alt="star" /></li>
                <li >{`${currentMovie.vote_count}votes`}</li>
                <li className='overview'><i>{`overview : ${currentMovie.overview}`}</i></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default MovieDetail