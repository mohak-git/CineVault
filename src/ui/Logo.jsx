const Logo = ({ size }) => {

  const fontSize = {
    small: {
      h1: "text-lg",
      span: "text-xl",
    },
    large: {
      h1: "text-4xl",
      span: "text-5xl",
    },
  };

  return (
    <h1 className={`logo ${fontSize[size].h1} font-Quest`}>
      <span className="text-cyan-200 [text-shadow:0px_5px_10px_rgb(1_74_214_/_1),_0px_-5px_10px_rgb(1_74_214_/_1),_5px_0px_10px_rgb(1_74_214_/_1),_-5px_0px_10px_rgb(1_74_214_/_1)] tracking-wider">
        <span className={`${fontSize[size].span}`}>C</span>ine
      </span>
      <span className="text-cyan-200 [text-shadow:0px_5px_10px_rgb(232_3_3_/_1),_0px_-5px_10px_rgb(232_3_3_/_1),_5px_0px_10px_rgb(232_3_3_/_1),_-5px_0px_10px_rgb(232_3_3_/_1)] tracking-wider">
        <span className={`${fontSize[size].span}`}>V</span>ault
      </span>
    </h1>
  );
};

export default Logo;
