import React from 'react';

const BookingRow = ({ booking, handleDelete,handleBookingConfirm  }) => {
    

    return (
         <tr>
        <th>
        <button onClick={()=>handleDelete(booking._id)} className="btn btn-circle btn-sm btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={booking?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
                        <div className="font-bold">{ booking?.customerName}</div>
  
            </div>
          </div>
        </td>
        <td>
      {booking?.price}
   
        </td>
        <td>{ booking?.date}</td>
        <th>
                {
                    booking.status === 'confirm' ? <span>confirmed</span> :
                          <button onClick={()=>handleBookingConfirm (booking._id)} className="btn btn-primary bg-[#FF3811] text-white btn-xs">Confirm</button>
              }
        </th>
      </tr>
    );
};

export default BookingRow;