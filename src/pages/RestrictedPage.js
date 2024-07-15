import React from "react";
import image1 from "../images/img7x-darkflax2.jpg";
import image2 from "../images/img7x-darkflax3.jpg";
import image3 from "../images/img7x-darkflax4.jpg";
import image4 from "../images/european-flax-linen-curtain-xldarkflax7.jpg";

const RestrictedPage = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto bg-white flex">
        {/* Left Section: Image Gallery */}
        <div className="w-[12%] p-4">
          <div className="mb-4">
            <img src={image1} alt="Gallery Image 1" className="w-full h-auto" />
          </div>
          <div className="mb-4">
            <img src={image2} alt="Gallery Image 2" className="w-full h-auto" />
          </div>
          <div className="mb-4">
            <img src={image4} alt="Gallery Image 3" className="w-full h-auto" />
          </div>
          <div className="mb-4">
            <img src={image3} alt="Gallery Image 4" className="w-full h-auto" />
          </div>
        </div>

        {/* Center Section: Main Image */}
        <div className="w-2/4 p-4">
          <img src={image4} alt="Main Product" className="w-full h-auto" />
        </div>

        {/* Right Section: Product Details */}
        <div className="w-[40%] p-4">
          <div className=" font-sans">
            <div className="">
              <h1 className="text-xs mb-2">
                LINEN SHEER GROMMET DRAPERY
              </h1>
              <p className="text-lg mb-4">115,000 Tomans</p>
              <div className="mb-4">
                <span className="font-semibold">Color: White</span>
                <div className="flex mt-2">
                  <div className="w-8 h-8 bg-gray-400 mr-2"></div>
                  <div className="w-8 h-8 bg-gray-300 mr-2"></div>
                  <div className="w-8 h-8 bg-gray-200"></div>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-semibold">Size:</span>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <button className="border p-2 text-gray-400" disabled>
                    140CM X 220CM
                  </button>
                  <button className="border p-2 text-gray-400" disabled>
                    140CM X 300CM
                  </button>
                  <button className="border p-2">280CM X 300CM</button>
                  <button className="border p-2 text-gray-400" disabled>
                    300CM X 300CM
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-semibold">Lining:</span>
                <div className="flex mt-2">
                  <button className="border p-2 mr-2">Standard Lining</button>
                  <button className="border p-2">Unlined</button>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-semibold">QTY:</span>
                <div className="flex items-center mt-2">
                  <button className="border p-2">-</button>
                  <input
                    type="text"
                    value="1"
                    className="border p-2 text-center w-12 mx-2"
                    readOnly
                  />
                  <button className="border p-2">+</button>
                </div>
              </div>
              <button className="bg-gray-800 text-white py-2 px-4 w-full">
                ADD TO BAG
              </button>
              <button className="mt-2 py-2 px-4 w-full border">
                SAVE TO WISHLIST
              </button>
              <div className="mt-4">
                <details className="mb-2">
                  <summary className="cursor-pointer">
                    Product Description
                  </summary>
                  <p className="mt-2">Detailed description of the product.</p>
                </details>
                <details className="mb-2">
                  <summary className="cursor-pointer">Dimensions</summary>
                  <p className="mt-2">Dimensions information.</p>
                </details>
                <details className="mb-2">
                  <summary className="cursor-pointer">Materials & Care</summary>
                  <p className="mt-2">Materials and care information.</p>
                </details>
                <details>
                  <summary className="cursor-pointer">
                    Shipping & Returns
                  </summary>
                  <p className="mt-2">Shipping and returns information.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrictedPage;
