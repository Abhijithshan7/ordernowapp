import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = () => toast("Item Added successfully!!");
const Products = ({ products = [], handleAddToCard }) => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {products.map((product) => {
            console.log(product, "products");
            return (
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class=" object-contain object-center w-full block h-full"
                    src={product.image}
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 class=" text-gray-900 title-font text-lg font-medium truncate  ; ">
                    {product.title}
                  </h2>
                  <p class="mt-1  ">{product.price}</p>
                </div>
                <button
                  class=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-4 ;"
                  onClick={() => {
                    {
                      notify(product);
                    }
                    handleAddToCard(product);
                  }}
                >
                  Add to card
                </button>
                <ToastContainer
                  position="top-left"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
                /
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
