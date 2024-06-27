import React from 'react';
import './Academy.css';
import ReactPlayer from 'react-player';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';

const Academy = () => {
  return (
    <div className='academy'>
      <div className="video-gallery">
        <div className="video-wrapper">
          <ReactPlayer url={video1} playing loop muted width="100%" height="100%" />
        </div>
        <div className="video-wrapper">
          <ReactPlayer url={video2} playing loop muted width="100%" height="100%" />
        </div>
        <div className="video-wrapper">
          <ReactPlayer url={video3} playing loop muted width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
}

export default Academy;
