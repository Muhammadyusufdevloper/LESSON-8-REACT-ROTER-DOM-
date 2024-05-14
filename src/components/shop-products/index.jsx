import React, { useState } from 'react'
import "./Shop-products.scss"
import axios from '../../api'
import { useEffect } from 'react'

const ShopProducts = () => {
    const[productApi,setProductApi] = useState(null)
    const[seeMoreLoading,setSeeMoreLoading] = useState(false)
    const[seeMore,setSeeMore] = useState(1)
    const[loading,setLoading] = useState(false)
    let limetCount = 8
    useEffect(()=>{
        setSeeMoreLoading(true)
        setLoading(true)
        axios
            .get(`?limit=${ 8 + limetCount * seeMore}`)
            .then(respons => setProductApi(respons.data.products))
            .catch(error => console.error(error))
            .finally(()=>{
                setSeeMoreLoading(false)
                setLoading(false)
            })
    },[seeMore])
    
    const product = productApi?.map((product)=>(
        <div className='shop__card' key={product.id}>
            <div className="shop__img-part">
                <Link to={`/single/${product.id}`}>
                    <img src={product.images[0]} alt={product.title} />
                </Link>
            </div>
            <div className="shop__info-part">
                <h3 className="shop__product-title">{product.title}</h3>
                <p className="shop__product-desc">{product.category}</p>
                <p className="shop__product-desc">{product.price}$</p>
            </div>
        </div>
    ))
    let loadingCount = (
        <div className="shop__loading__cards">
          <div className="shop__loading__img-part loading__anime"></div>
          <div className="shop__loading__info-part">
            <div className="loading__anime shop__loading__info-part-div"></div>
            <div className="loading__anime shop__loading__info-part-div"></div>
            <div className="loading__anime shop__loading__info-part-div"></div>
          </div>
        </div>
      );
      let loadingData = (
        <div className="shop__loading">
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
        </div>
      );
  return (
    <>
        <section className='shop'>
            <div className='container'>
                <h1 className='shop__title'>Shop All Products</h1>
                {loading ? loadingData : <></>}
                <div className='shop__cards'>
                    {product}
                </div>
                <button onClick={()=> setSeeMore(prev => prev + 1)} disabled={seeMoreLoading}className='shop__btn'>See more</button>
            </div>
        </section>
    </>
  )
}

export default ShopProducts