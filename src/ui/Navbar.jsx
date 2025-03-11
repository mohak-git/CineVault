import { NavLink } from "react-router-dom";

const Navbar = () => {
  const bgSpanPos = [
    {
      id: 1,
      left: -8,
      width: 71,
    },
    {
      id: 2,
      left: 88,
      width: 82,
    },
    {
      id: 3,
      left: 196,
      width: 72,
    },
    {
      id: 4,
      left: 292,
      width: 88,
    },
  ];

  return (
    <ul
      className={`navList relative flex h-full justify-evenly font-bold items-center gap-10
        [&>li]:z-1 *:transition-all *:duration-500
        [&>:nth-child(2):hover~span]:left-[88px] [&>:nth-child(2):hover~span]:w-[82px]
        [&>:nth-child(3):hover~span]:left-[196px] [&>:nth-child(3):hover~span]:w-[72px]
        [&>:nth-child(4):hover~span]:left-[292px] [&>:nth-child(4):hover~span]:w-[88px] 
        `}
    >
      <li className="navlink">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="navlink">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : ""
          }
          to="/movie"
        >
          Movies
        </NavLink>
      </li>
      <li className="navlink">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : ""
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li className="navlink">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : ""
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <span className="absolute -left-2 w-[71px] h-3/5 rounded-lg bg-gradient-to-tr to-cyan-800 "></span>
    </ul>
  );
};

export default Navbar;
