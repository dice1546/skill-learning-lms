"use client";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TypingText } from '../components/custom-text';

const WhyChoseUs = () => {
	return (
		<section className="flex items-center bg-white lg:h-screen font-poppins ">
        <div className="justify-center flex-1 max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="px-4 mb-10 md:text-center md:mb-20">
            <TypingText title='| Who we are' textStyles='text-center' />
                <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl">
                    What chose us?
                </h2>
                <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                <div className='flex-1 h-2 bg-slate-400'></div>
							<div className='flex-1 h-2 bg-slate-600'></div>
							<div className='flex-1 h-2 bg-slate-800'></div>
                </div>
            </div>
            <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
                    <h2 className="mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
                        We provide the most up to date skills courses
                    </h2>
                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                        We believe in delievering high quality content with the best practices in the field with the most demanded skills in the market.
                    </p>
                    <ul className="mb-10">
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Online Assignments
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Online Quizzes
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Smart AI Based Learning
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg>
                            </span>
                            Support Team of Teachers
                        </li>
                    </ul>
                    <Link href="/about">
                    <Button>
                        Learn More
                    </Button>
                    </Link>
                </div>
                <div className="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0">
                    <img src="https://utfs.io/f/c0037a74-67c7-44b2-b9de-b564d673425f-rqkiib.jpg" alt=""
                        className="relative z-40 object-cover w-full shadow-lg rounded-xl md:h-96 h-44" />
                </div>
            </div>
        </div>
    </section>
	);
};
export default WhyChoseUs;
