import './Programs.css';
import program_1 from '../../assets/program_1.jpg';
import program_2 from '../../assets/program_2.jpg';
import program_3 from '../../assets/program_3.jpg';
import prog_icon_1 from '../../assets/prog_icon_1.png';
import prog_icon_2 from '../../assets/prog_icon_2.png';
import prog_icon_3 from '../../assets/prog_icon_3.png';
import React from 'react';

const Programs = () => {
  return (
    <div className='Programs '>
        <div className="Program">
            <img src={program_1} alt="Program 1" />
            <div className="caption">
                <img src={prog_icon_1} alt="" /> 
            <p>Robotics</p>
            </div>
        </div>
        <div className="Program">
            <img src={program_2} alt="Program 2" />
            <div className="caption">
                <img src={prog_icon_2} alt="" /> 
            <p>Artificial intelligence</p>
            </div>
        </div>
        <div className="Program">
            <img src={program_3} alt="Program 3" />
            <div className="caption">
                <img src={prog_icon_3} alt="" /> 
            <p>Electronic</p>
            </div>
        </div>
    </div>
  );
}

export default Programs;
