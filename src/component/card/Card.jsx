import React, { createContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../card/Card.css'
import NotFound from '../notFound/NotFound'

export const list=createContext

function Card(props) {
    const {movies,searchedMovie}=props
    const [favourateList,setFavourateList]=useState([])

    let findfavorite = movies.filter(movie => favourateList.includes(movie.id));
    console.log(findfavorite)

    const addToFavouriteList=(id)=>{
        if (!favourateList.includes(id)) setFavourateList(favourateList.concat(id));
    }

    const removeFavourites=(id)=>{
        let index = favourateList.indexOf(id);
        console.log(index);
        let temp = [...favourateList.slice(0, index), ...favourateList.slice(index + 1)];
        setFavourateList(temp);
    }
    
    const movieList=movies.filter((movie)=>{
        return(
            searchedMovie.toLowerCase() == "" ? movie : movie.title.toLowerCase().includes(searchedMovie.toLowerCase())
        )
    }).map((movie)=>( 
                <div className='cards' key={movie.id} >
                    <div className='addToFav'>
                        <input  type="submit" value="AddtoFavourite" id={movie.id} 
                        onClick={()=>addToFavouriteList(movie.id)} style={{backgroundColor:"red",cursor: "pointer",padding:"3px 5px"}}/>
                    </div>
                    <Link to={`/movie/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='cardimg' alt="" />
                        <div className='cards_overlay'>
                            <div className='card_title'>{movie.title}</div>
                            <div>{movie.vote_average} 
                            <img  height={15} src="https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/star.png" alt="star" className='star' />
                            </div>
                            <div>{movie.vote_count+`votes`}</div>
                        </div>
                    </Link>
                </div>
                )
        )

        const wishListMovies=findfavorite
        .map((movie)=>{
            return(
            <div key={movie.id} className='cards' >
                <div className='removeFav'>
                    <input type="submit" value="remove from wishlist" style={{backgroundColor:"red",cursor:"pointer",padding:"5px"}} id={movie.id} onClick={() => removeFavourites(movie.id)}/>
                </div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='cardimg' alt="" />
                <div className='cards_overlay'>
                    <div className='card_info'>{movie.title}</div>
                    <div className='card_info'>{movie.vote_average} 
                        <img className='star' src="https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/star.png" alt="star" />
                    </div>
                    <div className='card_info'>{movie.vote_count+`votes`}</div>
                </div>
            </div>
            )}
        )
  return (
    <div className='card'>
        <div>
            {movieList && movieList.length>0 ? movieList : <NotFound/>}
        </div>
        <div className='gototop'>
            <button onClick={()=>window.scrollTo(0,0)}>Go to top</button>
        </div>
        <div className='wishlist'>
            <div className='wishlistedtag'>wishListed movies</div>
            {wishListMovies && wishListMovies.length>0 ? wishListMovies : <h2 style={{textAlign:"center"}}>Not added any movie</h2>}
        </div>
    </div>
  )
}
export default Card