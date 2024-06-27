import React, { useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next_icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user_1.jpg';
import user_2 from '../../assets/user_2.jpg';
import user_3 from '../../assets/user_3.jpg';
import user_4 from '../../assets/user_4.jpg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 2); // Only 2 slides
  };

  const slideBackward = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2); // Only 2 slides
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User 1" className="slide-img" />
                <div>
                  <h3>Ahmed chkoun</h3>
                  <span>Tunisia, soussa</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Brain Train Academy.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User 2" className="slide-img" />
                <div>
                  <h3>Younes</h3>
                  <span>Tunisia, jemmel</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Brain Train Academy.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User 3" className="slide-img" />
                <div>
                  <h3>Asma</h3>
                  <span>Tunisia, monastir</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Brain Train Academy.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User 4" className="slide-img" />
                <div>
                  <h3>Asma</h3>
                  <span>Tunisia, monastir</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Brain Train Academy.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
