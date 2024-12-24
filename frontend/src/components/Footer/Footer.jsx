import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="bg-navyblue text-white py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Footer Sections */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">STYLICAI</h2>
            <p>
              STYLICAI is revolutionizing the fashion industry with cutting-edge AI-generated photoshoots.
              Experience the future of fashion today.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#gallery" className="hover:underline">Gallery</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>Email: info@stylic.ai</p>
            <p>Phone: +91 93167-27742</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 border-t border-white pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} STYLIC. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
