import React from "react";
import "./App.css";
import searchIcon from "./search.svg";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard.jsx";

// d47f1dd7

const API_URL = "http://www.omdbapi.com?apikey=d47f1dd7"

function App() {
    
    const [movies, setMovies] = useState([])
    const [searchTerm, setsearchTerm] = useState('')

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies("Batman")
    }, [])
    
    return (
        <div className = "app">
            <h1>Movie Info</h1>

            <div className = "search">
                <input 
                placeholder="Search Movies"
                value = {searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
                />

                <img 
                src = {searchIcon}
                alt = "Search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
            movies?.length > 0
                ? (
                    <div className="container">
                        {
                            movies.map((movie) => {
                                return <MovieCard movie = {movie} />
                            })
                        }
                    </div>

                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App;