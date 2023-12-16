import { db } from "@/lib/db";
import { Chapter, Course } from "@prisma/client";
import { auth } from "firebase-admin";
import React from "react";

interface WebCourseDetailsProps {
    course: Course & {
        chapters: (Chapter)[]
    };
}
const ProductMainDetails = async ({
    course,
}: WebCourseDetailsProps) => {

  return (
    <section className="py-20 font-poppins bg-white dark:bg-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap mb-24 -mx-4">
          <div className="w-full md:w-1/2">
            <div className="lg:pl-10">
              <div className="mb-6 ">
                <span className="text-red-500 dark:text-red-200">New</span>
                <h2 className="max-w-xl mt-2 mb-4 text-3xl font-bold md:text-6xl font-heading dark:text-gray-300">
                  {course.title}
                </h2>
                <p className="max-w-md mb-4 text-gray-500 dark:text-gray-400">
                  Get $100-$500 off when you trade in an one plus 6 or newer.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline dark:text-gray-400"
                >
                  See how trade-in works
                </a>
              </div>
              <div className="">
                <p className="mb-4 text-lg font-semibold dark:text-gray-400">
                  Choose your finish
                </p>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                      <div>
                        <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-emerald-400"></div>
                        <p className="text-xs text-center text-gray-700 dark:text-gray-400">
                          Pearl Green
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                      <div>
                        <div className="w-8 h-8 mx-auto mb-2 bg-gray-700 rounded-full dark:bg-gray-600"></div>
                        <p className="text-xs text-center text-gray-700 dark:text-gray-400">
                          Mattee Black
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                      <div>
                        <div className="w-8 h-8 mx-auto mb-2 bg-red-500 rounded-full"></div>
                        <p className="text-xs text-center text-gray-700 dark:text-gray-400">
                          Red
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                      <div>
                        <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-stone-200"></div>
                        <p className="text-xs text-center text-gray-700 dark:text-gray-400">
                          Silver
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                      <div>
                        <div className="w-8 h-8 mx-auto mb-2 bg-blue-200 rounded-full"></div>
                        <p className="text-xs text-center text-gray-700 dark:text-gray-400">
                          Sierra Blue
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="mb-2 text-lg font-semibold dark:text-gray-400">
                  Choose your Capacity
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline dark:text-gray-400"
                >
                  How much capacity is right for you?
                </a>
                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                      <div>
                        <div className="mb-2 font-semibold dark:text-gray-400">
                          128 <span className="text-xs">GB</span>
                        </div>
                        <p className="px-2 text-xs font-medium text-center text-gray-700 dark:text-gray-400">
                          From $99 0r $41.62/mo. for 24 mo.
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                      <div>
                        <div className="mb-2 font-semibold dark:text-gray-400">
                          256 <span className="text-xs">GB</span>
                        </div>
                        <p className="px-2 text-xs font-medium text-center text-gray-700 dark:text-gray-400">
                          From $99 0r $41.62/mo. for 24 mo.
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                      <div>
                        <div className="mb-2 font-semibold dark:text-gray-400">
                          512 <span className="text-xs">GB</span>
                        </div>
                        <p className="px-2 text-xs font-medium text-center text-gray-700 dark:text-gray-400">
                          From $99 0r $41.62/mo. for 24 mo.
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                      <div>
                        <div className="mb-2 font-semibold dark:text-gray-400">
                          1 <span className="text-xs">GB</span>
                        </div>
                        <p className="px-2 text-xs font-medium text-center text-gray-700 dark:text-gray-400">
                          From $99 0r $41.62/mo. for 24 mo.
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="mb-4 text-lg font-semibold dark:text-gray-400">
                  Choose a payment option
                </p>
                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                  <div>
                    <button className="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                      <div>
                        <p className="px-2 text-base font-semibold text-center text-gray-700 dark:text-gray-400">
                          Pay in full
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                      <div>
                        <p className="px-2 text-base font-semibold text-center text-gray-700 dark:text-gray-400">
                          Pay monthly
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 ">
                <div className="flex flex-wrap items-center">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-truck"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold text-gray-700 dark:text-gray-400">
                    Delivery
                  </h2>
                </div>
                <div className="px-7">
                  <p className="mb-2 text-sm dark:text-gray-400">In Stock</p>
                  <p className="mb-2 text-sm dark:text-gray-400">
                    Free Shipping
                  </p>
                  <a
                    className="mb-2 text-sm text-blue-400 dark:text-blue-200"
                    href="#"
                  >
                    Get delivery dates
                  </a>
                </div>
              </div>
              <div className="mt-6 ">
                <div className="flex flex-wrap items-center">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-bag"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold text-gray-700 dark:text-gray-400">
                    Pickup
                  </h2>
                </div>
                <div className="px-7">
                  <a
                    className="mb-2 text-sm text-blue-400 dark:text-blue-200"
                    href="#"
                  >
                    Check availability
                  </a>
                </div>
              </div>
              <div className="mt-6 ">
                <button className="w-full px-4 py-2 font-bold text-white bg-blue-400 lg:w-96 hover:bg-blue-500">
                  Continue
                </button>
              </div>
              <div className="flex items-center mt-6 ">
                <div>
                  <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                    Still deciding?
                  </h2>
                  <p className="mb-2 text-sm dark:text-gray-400">
                    {" "}
                    Add this item to a list and easily come back to it later{" "}
                  </p>
                </div>
                <span className="ml-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 bi bi-bookmark dark:text-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full px-8 mb-8 md:w-1/2 md:mb-0">
            <div className="sticky top-0 z-50 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 ">
                <a
                  className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    ></path>
                  </svg>
                </a>
                <img
                  className="object-cover w-full lg:h-1/2"
                  src="https://i.postimg.cc/prW7DGkK/R-14.png"
                  alt=""
                />
                <a
                  className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </a>
              </div>
              {/* <div className="flex-wrap hidden -mx-2 md:flex">
                
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMainDetails;
