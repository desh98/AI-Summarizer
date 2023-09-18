import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-16 object-contain' />
        

        <button
          type='button'
          onClick={() =>
            window.open("https://deshaniabey.netlify.app/", "_blank")
          }
          className='black_btn'
        >
          Deshani
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Enhance your reading experience with Sumit, a free, open-source tool that condenses lengthy articles into succinct, easy-to-read summaries.
      </h2>
    </header>
  );
};

export default Hero;
