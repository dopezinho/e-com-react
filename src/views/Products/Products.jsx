import React from 'react'
import { useParams } from "react-router-dom"
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import ProductDetail from "../../components/ProductDetail/ProductDetail"
import Search from "../../components/Search/Search"
import './index.scss'

const Products = () => {
  const params = useParams()

  return (
    <section className="product">
      <HeaderMenu />
      <Search />
      <ProductDetail //data={selectProduct}
       />
    </section>
  ) 
}

export default Products