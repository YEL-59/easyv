import { Link } from "react-router";

const Footer = () => {
  const navitems = [
    { title: "About us", url: "about" },
    { title: "Contact us", url: "/#" },
    { title: "Help", url: "#" },
    { title: "Privacy Policy", url: "#" },
    { title: "Disclaimer", url: "#" },
  ];

  return (
    <>
      <div className="container mx-auto py-5">
        <div className=" flex justify-between items-center ">
          <div>
            <h1 className="text-5xl font-bold">EasyRate</h1>
          </div>
          <div className="max-w-xl ">
            <h2 className="text-2xl font-normal mb-5">
              EasyMigrate - Migration AI Platform
            </h2>
            <p>
              Welcome to EasyMigrate, your all-in-one AI-powered migration
              platform designed to revolutionize the way you plan, manage, and
              execute your relocation. With a focus on simplicity and
              efficiency, EasyMigrate empowers individuals and organizations to
              navigate their migration journey seamlessly.
            </p>
          </div>
        </div>
        <div className="border border-b mt-5 mb-5"></div>
        <div className="flex justify-between">
          <div>
            <ul
              className="hidden md:flex gap-10 text-black font-montserrat text-base not-italic font-normal leading-normal
"
            >
              {navitems.map((item, index) => (
                <li key={index} className="hover:text-gray-700 transition">
                  <Link to={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Copyright © 2024 • Company.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
