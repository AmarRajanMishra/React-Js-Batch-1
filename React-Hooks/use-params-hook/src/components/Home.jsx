import React from 'react'
import Movie from './Movie';
import Search from './Search';

function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        <Search />
        <Movie />
    </div>
  )
}

export default Home;
