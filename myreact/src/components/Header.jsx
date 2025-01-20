import { NavLink } from 'react-router-dom'; 
import travel from '../travel.png';

function Header() {
  return (
    <div className="bg-[#E2F1E7] flex justify-between items-center py-4 px-[40px] w-full shadow-2xl">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src={travel} className="w-[50px] h-[50px] slide-in-left" alt="Logo" />
        <p className="font-buche font-bold text-lg pl-2 text-[#243642] slide-in-left" style={{ letterSpacing: '0.2em' }}>
          Ur Tour
        </p>
      </div>

      {/* Navbar on the right */}
      <nav className="flex gap-8 text-[18px] font-bold tracking-widest text-[#243642] text-sm cursor-pointer">
        {/* Home */}
        <div className="relative group">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[#FFF4F4]  ${isActive ? 'underline' : ''}` // Add underline on hover and for active link
            }
          >
            Home
          </NavLink>
        </div>

        {/* Destination */}
        <div className="relative group">
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              `hover:text-[#FFF4F4] hover:underline ${isActive ? 'underline' : ''}` // Add underline on hover and for active link
            }
          >
            Blogs
          </NavLink>
        </div>

        {/* Tour and Experiences */}
        <div className="relative group">
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `hover:text-[#FFF4F4] hover:underline ${isActive ? 'underline' : ''}` // Add underline on hover and for active link
            }
          >
            Tour and Experiences
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
