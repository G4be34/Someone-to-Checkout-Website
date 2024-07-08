import React from "react";

const Header = () => {
  return (
    <header className="relative w-full bg-white px-4">
      <div className="flex items-center justify-between h-24">
        <div className="text-2xl font-abril-fatface text-primary">
          Someone to Check Out
        </div>
        <div className="relative w-24 h-14 rounded-lg bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(https://assets.api.uizard.io/api/cdn/stream/c382e6ca-8999-42a9-b1e0-3de638bcce5d.png)' }}>
        </div>
        <div className="flex space-x-4">
          <Button label="Viewer's Hub" customStyle="border border-gray-900 bg-white text-gray-900" />
          <Button label="Your Profile" customStyle="bg-gray-900 text-white" />
        </div>
      </div>

//sub header section containg elements to be below main header 
      <div className="mt-4">
        <div className="flex space-x-4 justify-center">
          <Text text="Properties" />
          <Text text="About" />
          <Text text="Contact Us" />
          <Text text="Request Viewing" />
          <Button label="Post Listing" customStyle="border border-teal-400 bg-teal-100 text-gray-900" />
          <Icon />
        </div>
        <div className="mt-4 border-t border-gray-300" />
      </div>
    </header>
  );
};

const Text = ({ text }) => (
  <div className="text-sm font-medium text-gray-900 font-red-hat-display">
    {text}
  </div>
);

const Button = ({ label, customStyle }) => (
  <button className={`cursor-pointer px-2 py-1 rounded-full text-sm font-red-hat-display font-medium ${customStyle}`}>
    {label}
  </button>
);

const Icon = () => (
  <svg className="text-gray-900 fill-current w-6 h-6" viewBox="0 0 576 512">
    <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
  </svg>
);

export default Header;
