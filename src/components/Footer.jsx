import Logo from "../ui/Logo";
import FooterContact from "../ui/FooterContact";
import FooterSocialMedia from "../ui/FooterSocialMedia";

const Footer = () => {
  return (
    <div className="footerContainer bg-black/90 h-[20vh] flex flex-col justify-center items-center">
      <div className="w-5/6 h-3/4 flex px-4 justify-between items-center">
        <div className="h-full w-1/5 flex justify-center items-center hue-rotate-180">
          <Logo size={"small"} />
        </div>

        <div className="relative h-full w-3/5 flex flex-col justify-center items-center ">
          <ul className="h-1/2 w-full flex items-center gap-20">
            <FooterContact />
          </ul>
          <ul className="h-1/3 w-full flex justify-evenly items-center px-48">
            <FooterSocialMedia />
          </ul>
        </div>
      </div>
      <div className="px-2 text-xs text-white/50 flex items-center">
        Copyright © 2014. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
