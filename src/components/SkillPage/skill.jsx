import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { skills } from './skill-icon';
import './skill.css'

const Skill = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    cssEase: "linear",
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

  return (
    <div id='skill' className='slider-skill'>
      <h1>Skills</h1>
      <Slider {...settings} className='slider'>
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return(
            <div key={index} className='skill-container'>
              <Icon className='skill-icon'/>
              <p>{skill.name}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  )
}

export default Skill;