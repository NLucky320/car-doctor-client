// import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import useServices from '../../Hooks/useServices';


const Services = () => {
    const services = useServices();
    // const [services, setServices] = useState([]);

    // useEffect(()=> {
    // fetch('/services.json')
    //     .then(res => res.json())
    // .then(data=>setServices(data))
    // },[])
    return (
        <div>
            <div className='max-w-[717px] mx-auto text-center mt-[20px] md:mt-[80px]'>
                 <h4 className='text-[20px] text-[#FF3811] font-bold'>Service</h4>
                <h2 className='font-bold text-[#151515] text-[24px] lg:text-[45px]'>Our Service Area</h2>
                <p className='text-[#737373] capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'> 
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;