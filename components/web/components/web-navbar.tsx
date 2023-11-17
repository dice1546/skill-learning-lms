'use client';

import { motion } from 'framer-motion';
import styles from '@/styles';
import { navVariants } from '@/lib/motion';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const WebNavbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<motion.nav
			variants={navVariants}
			initial='hidden'
			whileInView='show'
			className={`${styles.xPaddings} relative`}
		>
			<div className='max-w-screen-xl px-4 w-full mx-auto flex justify-between mt-5 gap-10'>
				<Link href='/'>
					<Image
					height={90}
					width={200}
					src='/skillustad.png'
					alt='search'
					className='mt-3 z-50 cursor-pointer object-contain'
					/>
				</Link>
				<motion.ul
					className={`list-none sm:flex md:flex hidden justify-end px-5 items-center flex-1 `}
				>
					<Link href='/'>
						<Button variant='ghost'>Home</Button>
					</Link>
					<Link href='/about'>
						<Button variant='ghost'>
							About Us
						</Button>
					</Link>
					<Link
						href='/courses'
					>
						<Button variant='ghost'>
							Courses
						</Button>
					</Link>
					<Link
						href='/pricing'
					>
						<Button variant='ghost'>
							Pricing
						</Button>
					</Link>
					<Link
						href='/contact'
					>
						<Button variant='ghost'>
							Contact
						</Button>
					</Link>
					<Link href='/dashboard' className='ml-3 mr-3'>
						<Button variant='outline'>Log in</Button>
					</Link>
					<Link href='/dashboard'>
						<Button variant='default'>Sign Up</Button>
					</Link>
				</motion.ul>
				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<Image
						src={toggle ? '/close.svg' : '/menu.svg'}
						alt='menu'
						width={24}
						height={24}
						onClick={() => setToggle((prev) => !prev)}
					/>
					<div
						className={`${
							toggle ? 'flex' : 'hidden'
						} p-16 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-2xl z-30 shadow-2xl border-2 border-gray sidebar`}
					>
						<ul className='list-none flex flex-col justify-end items-center flex-1'>
							<Link href='/'>
								<Button variant='ghost' className='mb-2'>
									Home
								</Button>
							</Link>
							<Separator />

							<Link href='/about'>
								<Button variant='ghost' className='mb-2 mt-2'>
									About Us
								</Button>
							</Link>
							<Separator />
							<Link href='/contact'>
								<Button variant='ghost' className='mb-2 mt-2'>
									Courses
								</Button>
							</Link>
							<Separator />
							<Link href='/contact'>
								<Button variant='ghost' className='mb-2 mt-2'>
									Prices
								</Button>
							</Link>
							<Separator />
							<Link href='/contact'>
								<Button variant='ghost' className='mb-2 mt-2'>
									Contact
								</Button>
							</Link>
							<Separator />
							<Link href='/dashboard' className='mt-3 mb-3'>
								<Button variant='outline'>Log in</Button>
							</Link>
							<Separator />
							<Link href='/dashboard' className='mt-3'>
								<Button variant='default'>Sign Up</Button>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default WebNavbar;
