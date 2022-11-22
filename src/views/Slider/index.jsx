import React from "react";
import { Carousel } from "antd";

import card from '../../assets/imgs/logo.png'

import './index.css';

const contentStyle = {
  textAlign: 'center',
  width: '100%',
  maxHeight: '100% !important'
};


function Slider() {
  return (
    <Carousel >
      <div>
        <img style={contentStyle} src='https://cdn.cheapism.com/images/011618_most_beautiful_views_in_the_world_sli.max-784x410_ZXOqfVp.jpg'></img>
      </div>
      <div>
        <img style={contentStyle} alt='' src='https://www.gannett-cdn.com/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp'></img>
      </div>
      <div>
        <img style={contentStyle} alt='' src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"></img></div>
      <div>
        <img style={contentStyle} alt='' src='https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg'></img>
      </div>
    </Carousel>
    // <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <img src="https://www.gannett-cdn.com/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp" class="d-block w-100" alt="..."/>
    //     </div>
    //     <div class="carousel-item">
    //       <img src="https://www.gannett-cdn.com/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp" class="d-block w-100" alt="..."/>
    //     </div>
    //     <div class="carousel-item">
    //       <img src="https://www.gannett-cdn.com/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp" class="d-block w-100" alt="..."/>
    //     </div>
    //   </div>
    //   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
}

export default Slider;
