import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterSocialMedia = () => {
  const footerSocialMediaData = [
    {
      id: 1,
      icon: <FaFacebook />,
      link: "https://www.facebook.com",
      color: "hover:text-cyan-500",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      link: "https://www.twitter.com",
      color: "hover:text-yellow-500",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      link: "https://www.instagram.com",
      color: "hover:text-red-500",
    },
    {
      id: 4,
      icon: <FaGithub />,
      link: "https://www.github.com",
      color: "hover:text-purple-500",
    },
  ];

  return (
    <>
      {footerSocialMediaData.map((el) => {
        return (
          <li key={el.id} className="flex justify-evenly items-center gap-2">
            <div
              className={`text-sm text-white/70 ${el.color} transition-all duration-250`}
            >
              <a href={el.link}>{el.icon}</a>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default FooterSocialMedia;
