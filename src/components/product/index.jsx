import React, { Fragment, useEffect, useState} from "react";
import "./Product.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "../../api";

import "swiper/css";
import "swiper/css/pagination";

import {Autoplay} from "swiper/modules";
import { Link } from "react-router-dom";

const Product = () => {
    const [prodactApi,setProdactApi] = useState()
    const[loading,setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true)
        axios
            .get()
            .then(respons => setProdactApi(respons.data.products))
            .catch(error => console.error(error))
            .finally(()=>{
              setLoading(false)
            })
    },[])
    const product = prodactApi?.map((product)=>(
        <SwiperSlide key={product.id}>
            <div className="product__img-card">
                <button className="product__card-btn">sale !</button>
                <Link to={`/single/${product.id}`}>
                   <img src={product.images[0]} alt={product.title} />
                </Link>
            </div>
            <div className="product__info-card">
                <h3 className="product__title">{product.title}</h3>
                <p className="product__desc">{product.category}</p>
                <p className="product__desc">{product.price}$</p>
            </div>
        </SwiperSlide>
    ))
    let loadingCount = (
      <SwiperSlide>
        <div className="shop__loading__img-part loading__anime"></div>
        <div className="shop__loading__info-part">
          <div className="loading__anime shop__loading__info-part-div"></div>
          <div className="loading__anime shop__loading__info-part-div"></div>
          <div className="loading__anime shop__loading__info-part-div"></div>
        </div>
        </SwiperSlide>
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
    <Fragment>
      <section className="product">
        <div className="product__wrapper container">
          <div className="prodact__cards">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {
                loading?loadingData : <></>
              }
            {product}
            </Swiper>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Product;
