"use client"
import { FaDownload } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";

const Footer = () => {
const [download, setDownload] = useState(false);

const defaultOptions = {
  loop: download,
  autoplay: download,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const handleDownload = () => {
  location.href="https://drive.google.com/uc?export=download&id=1gmZ5o3dpbTmF9UBKsIoiQ4YFksRkUv_b"
  setDownload(true);
  setTimeout(()=>{
      setDownload(false);
  },5000)
};


  return (
    <section id="contact">
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
         On the lookout for new opportunities
        </h1>
        <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${download ? "block" : "block"
                  }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={download ? "Downloading!" : "Download my CV"}
                icon={<FaDownload />}
                position="left"
                handleClick={handleDownload}
                otherClasses="!bg-[#161A31]"
              />
            </div>
            </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-thin">To infinity & beyond
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
             <a href={info.link} key={info.id}>
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
             
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;