import React from 'react'
import './index.scss'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>Home</h1>
        <button>
            <Link to={`/products/1`}>Produto</Link>
        </button>
      </div>
    </div>
  )
}

export default Home