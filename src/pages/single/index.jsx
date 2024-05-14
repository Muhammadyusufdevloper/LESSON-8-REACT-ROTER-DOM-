import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Single.scss"

const Single = () => {
  const params = useParams();
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    axios
      .get(`/${params.id}`)
      .then((response) => setProductData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section className="single">
        <div className="container">
          <h1 className="single__title">Shop Item</h1>
          {
            <div className="single__cards">
              <div className="single__img-part">
                <img src={productData?.thumbnail} alt="" />
              </div>
              <div className="single__info-part">
                <h3 className="single__info-part__title">{productData?.title}</h3>
                <p className="single__info-part__desc">{productData?.brand}</p>
                <p className="single__info-part__desc">{productData?.description}</p>
                <p className="single__info-part__desc">{productData?.price}$</p>
                <p className="single__info-part__desc">{productData?.stock}</p>
                <p className="single__info-part__desc">{productData?.rating}</p>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  );
};

export default Single;
