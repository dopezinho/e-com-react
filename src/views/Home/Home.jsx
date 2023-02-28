import React from 'react'
import './index.scss'
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div className="home">
      <div className="container">
        <h1>Home</h1>
      </div>

      <button>
        <Link to={`/products/1`}>Produto</Link>
      </button>

      <button>Testando main butt</button>
    </div>
  )
}

export default Home