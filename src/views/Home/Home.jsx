import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";
import Search from '../../components/Search/Search';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';

const Home = ({ data }) => {
  return (

    <div className="home">
      <HeaderMenu/>
      <Search />

      
    </div>
  )
}

export default Home