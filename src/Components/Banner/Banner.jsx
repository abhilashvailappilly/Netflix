import React from "react";
import  './Banner.css'
function Banner() {
  return (
    <div className="banner">
        <div className="content">
            <h1 className="title">Movie Name  </h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo modi ea delectus placeat cum accusantium, aliquam quaerat facere, fuga optio fugiat sint neque quibusdam possimus quidem libero minus doloribus iusto?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsa nesciunt blanditiis praesentium dolorem delectus? Ut deleniti, accusamus voluptatum quibusdam quam, assumenda laborum atque cupiditate quidem quia saepe aut quae.</h1>
        </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
