
import { FaHome, FaCog, FaUser, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='h-[100vh] w-fit shadow-2xl  shadow-[#2b5716]  bg-[#949574] text-[#364F2A] flex flex-col justify-center p-2'>
      <NavLink to='/' >
        <FaHome className='text-3xl ' />Home
      </NavLink>
                
      <NavLink to='/profile'>
        <FaUser className='text-3xl mt-16' />
        Profile
      </NavLink>

      <NavLink to='/settings'>
        <FaCog className='text-3xl mt-16' />
        Settings
      </NavLink>

      <NavLink to='/about'>
        <FaInfoCircle className='text-3xl mt-16' />
        About
      </NavLink>
      <NavLink to='/logout'>
        <FaSignOutAlt className='text-3xl mt-16' />
        Logout
      </NavLink>
    </div>
  );
}

export default Navbar;



