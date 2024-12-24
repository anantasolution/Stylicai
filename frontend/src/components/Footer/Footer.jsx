import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../assets/footer_logo.png";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="h-full p-4 bg-navyblue text-white  pt-16 w-full">
      <div className=" flex flex-col items-start md:justify-center md:items-center ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full text-center">
          {/* Logo and About Section */}
          <div className="flex flex-col gap-6 items-center">
            <div className="w-32 md:w-40">
              <img src={logo} alt="StylicAI Logo" className="object-contain" />
            </div>
            <p className="text-sm md:text-lg leading-relaxed w-56">
              STYLICAI is revolutionizing the fashion industry with cutting-edge
              AI-generated photoshoots. Experience the future of fashion today.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-400"
              >
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-xl md:text-3xl  sm:text-4xl  font-semibold">Newsletter</h2>
            <p className="text-md md:text-md leading-relaxed w-56 text-pretty">
            Subscribe to our newsletter to receive updates on the latest news!
            </p>
          </div>

          {/* Contacts Section */}
          <div className="flex flex-col items-center gap-6 -ml-12">
            <h2 className="text-3xl sm:text-4xl  lg:text-3xl font-semibold">Contacts</h2>
            <div>
              <p className="font-semibold">Contact</p>
              <p className="text-sm flex gap-2">
                <span>
                  <CallIcon />
                </span>
                +91 98989 65365
              </p>
            </div>
            <div>
              <p className="font-semibold">Mail us</p>
              <p className="text-sm flex gap-2">
                <span>
                  <EmailIcon />
                </span>
                info@anantasolution.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} STYLIC. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
