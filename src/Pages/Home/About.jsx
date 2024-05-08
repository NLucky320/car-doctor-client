import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
       <div className="hero mt-[20px] md:mt-[80px]">
  <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                     <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                     <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-[8px] border-white rounded-lg shadow-2xl" />
   </div>
                <div className='lg:w-1/2 pt-8 md:pt-14 lg:pt-0'>
                    <h4 className='text-[20px] text-[#FF3811] font-bold'>About Us</h4>
      <h1 className="text-[24px] lg:text-[45px] font-bold max-w-[376px]">We are qualified & of experience in this field</h1>
                    <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className='text-[#737373] pb-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn text-white bg-[#FF3811]">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;