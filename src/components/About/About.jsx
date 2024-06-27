import React from 'react';
import './About.css';
import about_img from '../../assets/univer.jpg';
import play_icon from '../../assets/play.png';

const About = () => {
  return (
    <div className='about '>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Unleash creativity with robotics at Brain Train Academy. Our hands-on approach empowers kids to design, build, and program robots, fostering problem-solving skills and innovation.</p>
            <p>Empower tomorrow's entrepreneurs with our dynamic courses. Teens learn critical thinking, strategic planning, and how to launch their own ventures, preparing them for success.</p>
            <p>Discover where STEM meets business savvy. Our integrated curriculum prepares students for a dynamic world by blending technical mastery with entrepreneurial spirit.</p>
        </div>
    </div>
  );
}

export default About;

