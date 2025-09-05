
import { FiArrowRightCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Buy", path: "/buy" },
    { name: "Rent", path: "/rent" },
    { name: "Sell", path: "/sell" },
    { name: "About us", path: "/about" },
    { name: "Contact us", path: "/contact" },
  ];
  return (
    <nav className='w-full py-9   flex items-center justify-between  max-md:px-[30px] max-md:py-7'>
      <img className='w-[176px] max-sm:w-[170px] h-auto ' src="../../public/logo.png" alt="logo" />

    <div className="flex items-center gap-6 text-lg font-poppins max-[950px]:hidden text-[#1E1E1E]">
        {navItems.map((item) => (
          // <NavLink
          //   key={item.path}
          //   to={item.path}
          //   className={({ isActive }) =>
          //     `cursor-pointer transition-colors ${
          //       isActive ? "text-blue-600 font-semibold" : "text-[#1E1E1E]"
          //     }`
          //   }
          // >
            <span>{item.name}</span>
          // </NavLink>
        ))}
      </div>

      <button className='w-52 h-[47px] bg-[#1E3A8A] rounded-3xl text-[#FFFFFF] text-lg text-poppins cursor-pointer flex items-center justify-center gap-1 px-5 py-2.5 max-sm:hidden max-lg:text-md'>
        <span>
          Login / Register
        </span>

        <div className="w-[25px] h-[25px] flex items-center justify-center">
          <FiArrowRightCircle className="w-[17px] h-[17px] text-[#FFFFFF]" />
        </div>
      </button>

      <button className="sm:hidden cursor-pointer">
        <IoMenu className="text-3xl text-[#1E1E1E] " />
      </button>
    </nav>
  )
}

export default Navbar