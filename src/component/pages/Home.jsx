import React, { useEffect, useState } from 'react'
import '../pages/Home.css'
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Card from "../card/Card"
import Footer from '../footer/Footer';

function Home() {
    const [popularMovies,setPopularMovies]=useState([])
    const [searchedMovie,setSearchedMovie]=useState("");
    const [wishList,setWishList]=useState([]);

    const getMovie=async ()=>{
        try{
            const dataList=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=01682d2fe1bb43f001fe43f6f5b3fae4&language=en-US")
            setPopularMovies(dataList.data.results)
            console.log(dataList)
        }
        catch(err){
            console.log(err)
        }
    }

    function search(e){
        setSearchedMovie(e.target.value)
    }

    function addFavourite(fList){
        setWishList(fList);
    }
    console.log(wishList)

    useEffect(()=>{
        console.log(popularMovies)
        getMovie()
    },[])

  return (
    <div className='home'>
        <div className='poster'>
            <Carousel 
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >

            {
                popularMovies.map(movie=>(
                <Link to={`/movie/${movie.id}`}>
                    
                    <div className='posterImage'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie carousel" className='image'/>
                        <div style={{fontFamily:'cursive',color:"black"}}>{`MovieName : ${movie.title}`}</div>
                    </div>

                </Link>
                ))
            }
            </Carousel>
        </div>
        <div className='search'>
            <input type="text" className='searchtext' size={40} value={searchedMovie} placeholder="search here..." onChange={search}/>
        </div>
        <Card addFavourite={addFavourite} movies={popularMovies} searchedMovie={searchedMovie}/>
        <Footer/>
    </div>
  )
}

export default Home