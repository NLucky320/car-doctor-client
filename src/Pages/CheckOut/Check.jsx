import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Check = () => {
    const service = useLoaderData()
    
    const {user}=useContext(AuthContext)
    // console.log(service)
    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            date,
            service: service.title,
            service_id: service._id,
            price: service.price,
            message: message,
            phone: phone,
            image: service.img,

        }
        // console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    alert('service book successfully')
                }
        })

    }

    return (
        <div>
            <h2 className='text-center'>Book service : {service.title}</h2>

      <form onSubmit={handleBookService} className="card-body">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} placeholder="First Name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Phone</span>
          </label>
          <input type="tel" placeholder="Your Phone" name='phone' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
          
        </div>       <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <input type="text" placeholder="Your Message" name='message' className="input input-bordered" required />
          
        </div>       <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue={'$'+service.price} className="input input-bordered" required />
          
        </div>
                </div>
            
        <div className="form-control mt-6">
                    <input className="btn btn-primary bg-[#FF3811] text-white" type="submit" value='confirm order' />
        </div>
      </form>
 
        </div>
    );
};

export default Check;