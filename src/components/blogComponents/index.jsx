import React from "react";
import "./Blog.scss"
import temperedImg from "../../assets/image/blog/Tempered img.png";
import backImg from "../../assets/image/blog/back.png";

const BlogComponents = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <div className="blog__card">
            <div className="blog__card__info-box">
              <h3 className="blog__card__title">Tempered Glass</h3>
              <p className="blog__card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                dictum sit amet justo donec enim diam vulputate ut. Malesuada
                fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
                nulla pellentesque dignissim. Neque laoreet suspendisse interdum
                consectetur. Turpis massa sed elementum tempus egestas sed sed.
                Ornare massa eget egestas purus viverra accumsan in. Tristique
                senectus et netus et malesuada. Ornare suspendisse sed nisi
                lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor
                augue mauris augue neque gravida in fermentum et. Erat imperdiet
                sed euismod nisi porta lorem mollis aliquam ut. Proin libero
                nunc consequat interdum varius sit amet mattis. Odio eu feugiat
                pretium nibh ipsum.
              </p>
            </div>
            <div className="blog__card__img-box">
              <img className="blog__img"  src={temperedImg} alt="Tempered Img" />
            </div>
          </div>
          <div className="blog__card">
            <div className="blog__card__img-box">
              <img className="blog__img" src={backImg} alt="Back Img" />
            </div>
            <div className="blog__card__info-box">
              <h3 className="blog__card__title">Back Cover</h3>
              <p className="blog__card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                dictum sit amet justo donec enim diam vulputate ut. Malesuada
                fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
                nulla pellentesque dignissim. Neque laoreet suspendisse interdum
                consectetur. Turpis massa sed elementum tempus egestas sed sed.
                Ornare massa eget egestas purus viverra accumsan in. Tristique
                senectus et netus et malesuada. Ornare suspendisse sed nisi
                lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor
                augue mauris augue neque gravida in fermentum et. Erat imperdiet
                sed euismod nisi porta lorem mollis aliquam ut. Proin libero
                nunc consequat interdum varius sit amet mattis. Odio eu feugiat
                pretium nibh ipsum.
              </p>
            </div>
          </div>
          <div className="blog__card">
            <div>
                <h3 className="blog__card__title">Mobile Brand and Price Strategy</h3>
                <p className="blog__card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComponents;
