import React, { useState } from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
const Header = ({ cardList = [], removeCard }) => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">OrderNow</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>

        <Menu
          menuButton={
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              {" "}
              Cart
            </button>
          }
          transition
        >
          {cardList.length === 0 && <MenuItem>Cart is empty</MenuItem>}
          {cardList.map((cart) => (
            <>
              <MenuItem>{cart.title} </MenuItem>

              <a
                href="#"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full rounded-t-lg h-55 md:h-auto md:w-20 md:rounded-none md:rounded-l-lg"
                  src={cart.image}
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {cart.price}
                    {cart.price}
                  </p>
                </div>
              </a>
              
            </>
            
          ))}
        </Menu>
      </div>
    </header>
  );
};

export default Header;
