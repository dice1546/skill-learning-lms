'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { fadeIn, slideIn, staggerContainer, textVariant2 } from '@/lib/motion';

const Hero = () => {
	return (
		<section className='bg-white'>
			<motion.div
				variants={staggerContainer(0.1, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'
			>
				<div className='mr-auto place-self-center lg:col-span-7'>
					<motion.h1
						variants={textVariant2('down', 'tween', 0.3, 1)}
						className='max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'
					>
						Unlock Your Potential with Cutting-Edge Digital Training
					</motion.h1>
					<motion.p
						variants={textVariant2('left', 'tween', 0.4, 1)}
						initial='hidden'
						whileInView='show'
						viewport={{ once: false, amount: 0.25 }}
						className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
					>
						Welcome to SkillUstad, where we believe in the power of learning to
						transform lives. Whether you're a tech enthusiast, aspiring
						entrepreneur, or looking to upskill, our digital training programs
						are tailored to meet your aspirations.
					</motion.p>
					<motion.div
						variants={fadeIn('right', 'tween', 0.4, 1)}
						className='flex'
					>
						<Link href='/dashboard'>
							<Button variant='default'>Get Started</Button>
						</Link>
						<motion.div>
							<Link href='/about' className='ml-3'>
								<Button variant='outline'>Learn More</Button>
							</Link>
						</motion.div>
					</motion.div>
				</div>
				<motion.div
					variants={slideIn('right', 'tween', 0.3, 1)}
					className='hidden lg:mt-0 lg:col-span-5 lg:flex'
				>
					<img
						src='https://utfs.io/f/3fb28f43-38df-4c52-86fd-59ec1de87607-zeqmaq.svg'
						alt='learnskills'
						className='scale-150'
					/>
				</motion.div>
			</motion.div>
		</section>
	);
};
export default Hero;
