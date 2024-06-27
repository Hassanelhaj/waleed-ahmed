import Image from "next/image";
import React from "react";
import profile from "../public/imgs/waleed.png";
import Writer from "./Writer";

const Hero = () => {
  return (
    <div
      className="container mx-auto h-full  sm:pt-20 md:mb-10 md:px-4 "
      id="home"
    >
      <div
        className="flex flex-col sm:flex-row-reverse  justify-center
     sm:justify-between sm:px-12 items-center gap-4 sm:flex sm:ml-0
      sm:gap-10 sm:p-8  "
      >
        <Image
          className="rounded-full shadow-xl dark:shadow-lg dark:shadow-white 
          dark:border-0 object-cover "
          priority={true}
          src={profile}
          width={300}
          height={300}
          

          alt="profile image"
          
        />
        <div className="flex flex-col  justify-center items-center flex-wrap gap-y-10  lg:pt-2 pb-8 px-8 ">
          <p className="text-2xl font-semibold capitalize pt-2 md:pt-0">
            Hello I am Waleed Ahmed
          </p>
          <div className="text-xl lg:text-3xl font-medium capitalize ">
            <Writer />
          </div>
          <p className="capitalize text-center">
            {" "}
            I am a versatile content writer and  with a passion for creating engaging and visually appealing content. With a keen eye for detail and a strong understanding of design principles and Programming, I strive to deliver high-quality work that exceeds client expectations. I have experience in the field of social Media Marketing . I am constantly seeking new challenges and opportunities to expand my skills and knowledge in the ever-evolving world of digital marketing.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-2 ">
            <a
              href="#projects"
              className=" text-lg font-medium capitalize
        px-3 py-2 text-center border border-slate-800 dark:border-slate-50 dark:text-slate-100
         text-black rounded-lg  sm:w-48 hover:bg-slate-800 hover:text-slate-100"
            >
               View My Projects 
            </a>
            <a download={"../public/imgs/hassan2.png"} target="_blank" 
            href ='https://drive.google.com/file/d/1bqNczjZy6W4GwuN3KQZib-EgHfIsIDaA/view?usp=drivesdk'
              className="text-lg font-medium capitalize hidden
        px-3 py-2 text-center bg-slate-800 dark:bg-slate-100 dark:text-slate-800 text-white rounded-lg  sm:w-48 hover:opacity-90"
            >
              downLoad Cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
