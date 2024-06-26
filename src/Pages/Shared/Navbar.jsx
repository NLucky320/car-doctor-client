import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext)
  const handleLogout = () => {
    logOut()
    .then(() => {
      
    })
      .catch(error => {
      console.log(error)
    })
  }

    const navItems = <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/services'>Services</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      {
        user ? <>
                <li><Link to='/bookings'>My Bookings</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li> 
          
          </>:
          <li><Link to='/login'>Login</Link></li>
      
   }
     
     
    
    </>
    return (
    <div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
                <Link to='/' className="btn btn-ghost text-xl"></Link>
                <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
            <div className="navbar-end">
              
                <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
 <button className="btn btn-outline btn-warning bg-white border border-[#FF3811] text-[#FF3811]">Appointment</button>
  </div>
</div>
    );
};

export default Navbar;