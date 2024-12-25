import { NavLink } from 'react-router-dom'; // Correct import for React Router v6
import logo from '../logo.png';

function Header() {
  return (
    <div className="bg-[#E2F1E7] flex justify-between items-center py-4 w-full px-[40px] relative shadow-2xl">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src={logo} className="w-[50px] h-[50px] slide-in-left" alt="Logo" />
        <p className="font-buche font-bold text-lg pl-2 text-[#243642] slide-in-left" style={{ letterSpacing: '0.2em' }}>
          Bloom
        </p>
      </div>

      {/* Navbar in the center */}
      <nav className="flex gap-6 text-[18px] w-[400px] overflow-hidden rounded-3xl font-bold tracking-widest text-[#FFF4F4] text-sm cursor-pointer transition-all duration-1000 px-8 py-2 bg-[#243642] bg-opacity-70 backdrop-blur-xl max-w-4xl justify-center mx-auto sticky top-0 z-50 slide-in-top">
        {/* Home */}
        <div className="relative group">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[#FFF4F4] ${isActive ? 'border-b-2 border-[#FFF4F4]' : ''}` // Bold underline for active link
            }
          >
            Home
          </NavLink>
        </div>

        {/* Products */}
        <div className="relative group">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-[#FFF4F4] ${isActive ? 'border-b-2 border-[#FFF4F4]' : ''}` // Bold underline for active link
            }
          >
            Products
          </NavLink>
        </div>

        {/* Delivery */}
        <div className="relative group">
          <NavLink
            to="/delivery"
            className={({ isActive }) =>
              `hover:text-[#FFF4F4] ${isActive ? 'border-b-2 border-[#FFF4F4]' : ''}` // Bold underline for active link
            }
          >
            Delivery
          </NavLink>
        </div>

        {/* Contact */}
        <div className="relative group">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-[#FFF4F4] ${isActive ? 'border-b-2 border-[#FFF4F4]' : ''}` // Bold underline for active link
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Log In and Cart on the right */}
      <div className="flex text-[17px] slide-in-right">
        <ul className="flex list-none space-x-4">
          <li className="relative group">
            <a href="#" className="text-[#243642] font-bold hover:text-[#243642] relative inline-block">Log In</a>
            <span className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#243642] transition-all duration-300 group-hover:w-full bottom-0"></span>
          </li>
          <p className="text-[#243642]">|</p>
          <li>
            <a href="#" className="text-[#243642] font-bold rounded-full">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
