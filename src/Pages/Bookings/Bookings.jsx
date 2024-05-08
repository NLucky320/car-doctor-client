import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';
import axios from 'axios';
import { set } from 'firebase/database';

const Bookings = () => {
const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
// useEffect(() => {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => setBookings(data))
    // }, [url]);
    
    useEffect(() => {
        axios.get(url, {withCredentials:true} )
            .then(res => {
            setBookings(res.data)
        })
    })
            const handleDelete = id => {
        const proceed = confirm('are you sure you want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
               method: 'DELETE'
           }) 
                .then(res => res.json())
               .then(data => {
                  setBookings(data)
                   if (data.deletedCount > 0) {
                       alert('deleted successfully')
                       const remaining = bookings.filter(booking => booking._id !== id);
                       setBookings(remaining)
                   }
            })
        }
    }

const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ status: 'confirm' })
    })
    .then(res =>  res.json())
    .then(data => {
   console.log(data);
        if (data.modifiedCount > 0) {
            // Update state or handle success
            const remaining = bookings.filter(booking =>booking._id !== id);
            const updated = bookings.find(booking => booking._id == id);
            updated.status = 'confirm'
            const newBooking = [updated, ...remaining];
            setBookings(newBooking)
        } else {
            console.log('No booking modified');
        }
    })
    .catch(error => {
        console.error('Error confirming booking:', error);
    });
}

    return (
        <div>
            <h2>Your Booking: {bookings.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Customer Name</th>
        <th>Price</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
                        {bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingConfirm ={handleBookingConfirm }
                        ></BookingRow>)}

    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default Bookings;