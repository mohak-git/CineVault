import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

const FooterContact = () => {
  const footerContactData = [
    {
      id: 1,
      icon: <MdCall />,
      title: "Call Us",
      value: "012-345-6789",
    },
    {
      id: 2,
      icon: <MdEmail />,
      title: "Mail Us",
      value: "test@test.com",
    },
    {
      id: 3,
      icon: <MdLocationOn />,
      title: "Find Us",
      value: "Main St, Denver, CO 80238, USA",
    },
  ];

  return (
    <>
      {footerContactData.map((el) => {
        return (
          <li key={el.id} className="flex justify-evenly items-center gap-2">
            <div className="text-3xl text-blue-500">{el.icon}</div>
            <div className="w-2/3 h-5/6 flex flex-col min-w-fit justify-center">
              <div className="text-white text-sm">{el.title}</div>
              <div className="text-white/50 text-xs">{el.value}</div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default FooterContact;
