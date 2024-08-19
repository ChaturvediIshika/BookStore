import React from 'react'
import list from '../../public/list.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"
import Card from './Card';

const Freebook = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const filteredData= list.filter((data)=>data.category==="free");

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
            <h1 className='font-semibold text-2xl pb-2'>Free Offered Courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo esse quae iusto magni perferendis aut quia, a
                liquam itaque aliquid. Repellat aspernatur, 
                molestias reprehenderit consectetur harum molestiae quae! Dolores, cum tenetur. </p>
            </div>

        {/* Slider */}
        <div>
            <Slider {...settings}>
                
                    {filteredData.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                
                {/* <Card/> */}

            </Slider>
            </div>
    </div>
    </>
  )
}

export default Freebook
