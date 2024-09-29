import React from "react";
import {
  FaDumbbell,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl">
      <div className="container">
        <div className="grid md:grid-cols-4 md:gap-4 md:py-5 border-t-2 border-gray/10 text-white">
          <div className="py-8 px-4 space-y-4">
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
              <FaDumbbell />
              <p>UFC</p>
              <p className="text-secondary">FITNESS</p>
            </div>
            <p className="hover:text-[#FF8901] cursor-pointer">
              Bhopal, Madhya Pradesh, Inida
            </p>
            <p className="hover:text-[#FF8901] cursor-pointer">
              ankityadav12502@gmail.com
            </p>
            <p className="hover:text-[#FF8901] cursor-pointer">8085092203</p>

            <div className="flex items-center justify-start !mt-6 gap-5">
              <a href="#">
                <HiLocationMarker className="text-3xl hover:text-[#FF8901]" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-[#FF8901]" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl hover:text-[#FF8901]" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-[#FF8901]" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
            <div className="py-8 px-4 ">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3 ">
                <li className="hover:text-[#FF8901]">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-[#FF8901]">
                  <a href="#">About</a>
                </li>
                <li className="hover:text-[#FF8901]">
                  <a href="#">Services</a>
                </li>
                <li className="hover:text-[#FF8901]">
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Company Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-[#FF8901]">
                  <a href="#">Our Services</a>
                </li>
                <li className="hover:text-[#FF8901]">
                  <a href="#">Contact</a>
                </li>
                <li className="hover:text-[#FF8901]">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="hover:text-[#FF8901]">
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Resources
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-[#FF8901]">
                  <a href="#">Our Services</a>
                </li>
                <li className="hover:text-[#FF8901]">
                  <a href="#">Contact</a>
                </li>
                <li className="hover:text-[#FF8901]">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="hover:text-[#FF8901]">
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
