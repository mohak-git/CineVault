import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";

const Header = () => {
  const navbarRef = useRef(null);

  useGSAP(() => {
    gsap.from(".headerLogoContainer .logo, .navList", {
      duration: 0.5,
      opacity: 0,
      x: -200,
    });
  });

  useGSAP(() => {
    if (navbarRef.current) {
      gsap.to(
        ".navlink",
        {
          duration: 1,
          opacity: 1,
          x: 0,
          stagger: 0.5,
        },
        { scope: navbarRef.current }
      );
    }
  });

  return (
    <div className="headerContainer bg-black/90 relative h-[15vh] w-screen flex justify-around items-center font-Monty gap-2 px-2 *:overflow-hidden">
      <div className="headerLogoContainer h-3/5 flex justify-center items-center px-2">
        <Logo size={"large"} />
      </div>

      <nav ref={navbarRef} className="navBar h-3/5 text-white text-lg px-2">
        <Navbar />
      </nav>
    </div>
  );
};

export default Header;
