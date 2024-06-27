import './Hero.css';
import React from 'react';
import right_arrow from '../../assets/right-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure Better Education for a Better World</h1>
        <p>
          Welcome to Future Innovators Academy! We empower kids aged 6-15 with hands-on robotics training and teens aged 15-18 with entrepreneurial skills. Join us to spark creativity, problem-solving, and leadership in the next generation!
        </p>
        <button className='btn'>Explore more <img src={right_arrow} alt="" /></button>
      </div>
    </div>
  );
}

export default Hero;
