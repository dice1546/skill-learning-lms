'use client';

import { motion } from 'framer-motion';
import styles from '@/styles';
import { navVariants } from '@/lib/motion'; 
import Link from 'next/link';
import { useState } from 'react';
// import { close } from '../public';
// import { menu } from '../public';

const WebNavbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<motion.nav
			variants={navVariants}
			initial='hidden'
			whileInView='show'
			className={`${styles.xPaddings} py-0 relative`}
		>
			<div className='absolute w-[50%] inset-0 gradient-01' />
			<div
				className={`${styles.innerWidth} mx-auto flex justify-between gap-10`}
			>
				<Link href='/'>
					<img
						src='/skillustad.png'
						alt='search'
						className='w-[200px] h-[100px] z-50 cursor-pointer object-contain'
					/>
				</Link>
				<motion.ul
					className={`list-none sm:flex hidden justify-end items-center flex-1 `}
				>
					<Link
						href='/'
						className='font-poppins font-medium cursor-pointer sm:text-[15px] text-[15px] lg:text-[15px] px-5 py-2 rounded-lg text-black transition-colors hover:text-black duration-300 hover:bg-gradient-to-r from-red-500 to-yellow-500'
					>
						Home
					</Link>
					<Link
						href='/projects'
						className='font-poppins font-medium cursor-pointer sm:text-[15px] text-[15px] lg:text-[15px] px-5 py-2 rounded-lg text-black transition-colors hover:text-black duration-300 hover:bg-gradient-to-r from-red-500 to-yellow-500'
					>
						Projects
					</Link>
					<Link
						href='/contact'
						className='font-poppins font-medium cursor-pointer sm:text-[15px] text-[15px] lg:text-[15px] px-5 py-2 rounded-lg text-black transition-colors hover:text-black duration-300 hover:bg-gradient-to-r from-red-500 to-yellow-500'
					>
						Contact Us
					</Link>
				</motion.ul>
				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<img
						src={toggle ? '/close.svg' : '/menu.svg'}
						alt='menu'
						className='w-[24px] h-[24px] object-contain'
						onClick={() => setToggle((prev) => !prev)}
					/>
					<div
						className={`${
							toggle ? 'flex' : 'hidden'
						} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-2xl z-30 shadow-2xl border-2 border-gray sidebar`}
					>
						<ul className='list-none flex flex-col justify-end items-center flex-1'>
							<Link
								href='/'
								className='font-poppins font-medium cursor-pointer text-[20px] px-4 py-2 rounded-lg text-white hover:text-black transition-colors duration-300 hover:bg-gradient-to-r from-red-500 to-yellow-500'
							>
								Home
							</Link>
							<Link
								href='/projects'
								className='font-poppins font-medium cursor-pointer text-[20px] px-4 py-2 rounded-lg text-white hover:text-black transition-colors duration-300 hover:bg-gradient-to-r from-red-500 to-yellow-500'
							>
								Projects
							</Link>
							<Link
								href='/contact'
								className='font-poppins font-medium cursor-pointer text-[20px] px-4 py-2 rounded-lg text-white hover:text-black transition-colors duration-300 hover:bg-gradient-to-r from-red-500 to-yellow-500'
							>
								Contact
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default WebNavbar;
