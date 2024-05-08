import React from 'react';
import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
       <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src={banner1} className="w-full rounded-xl" />
                <div className=" rounded-xl absolute flex left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500] h-full items-center">
                    <div className='text-white max-w-[470px] space-y-4 pl-8 md:pl-[100px] '>
                        <h2 className='text-[24px] lg:text-[60px] font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4 '>
                             <button className='btn btn-outline bg-[#FF3811] text-white'>Discover More</button>
                             <button className='btn btn-outline bg-transparent text-white'>Latest Project</button>
                       </div>
                    </div>
   
    </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  
      <a href="#slide4" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} className="w-full  rounded-xl" />
                <div className="absolute  rounded-xl flex left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500] h-full items-center">
                    <div className='text-white max-w-[470px] space-y-4 pl-8 md:pl-[100px] '>
                        <h2 className='text-[24px] lg:text-[60px] font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4 '>
                             <button className='btn btn-outline bg-[#FF3811] text-white'>Discover More</button>
                             <button className='btn btn-outline bg-transparent text-white'>Latest Project</button>
                       </div>
                    </div>
   
    </div>
     <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full  rounded-xl" />
                            <div className="absolute  rounded-xl flex left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500] h-full items-center">
                    <div className='text-white max-w-[470px] space-y-4 pl-8 md:pl-[100px] '>
                        <h2 className='text-[24px] lg:text-[60px] font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4 '>
                             <button className='btn btn-outline bg-[#FF3811] text-white'>Discover More</button>
                             <button className='btn btn-outline bg-transparent text-white'>Latest Project</button>
                       </div>
                    </div>
   
    </div>
   <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full  rounded-xl" />
                            <div className="absolute  rounded-xl flex left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500] h-full items-center">
                    <div className='text-white max-w-[470px] space-y-4 pl-8 md:pl-[100px] '>
                        <h2 className='text-[24px] lg:text-[60px] font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4 '>
                             <button className='btn btn-outline bg-[#FF3811] text-white'>Discover More</button>
                             <button className='btn btn-outline bg-transparent text-white'>Latest Project</button>
                       </div>
                    </div>
   
    </div>
   <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;