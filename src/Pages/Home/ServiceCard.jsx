import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={service.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{service.title} </h2>
                    <p className='text-[#FF3811]'>Price: {service.price} </p>
    <div className="card-actions">
              <Link to={`/checkout/${service._id}`}>
                     <button className="btn btn-primary bg-[#FF3811] text-white">Book Now</button>
              </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;