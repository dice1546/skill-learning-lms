'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { fadeIn, slideIn, staggerContainer, textVariant2 } from '@/lib/motion';
import Image from 'next/image';

const Hero = () => {
	return (
		<section className='bg-white'>
			<motion.div
				variants={staggerContainer(0.1, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.10 }}
				className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'
			>
				<div className='mr-auto place-self-center lg:col-span-7'>
					<motion.h1
						variants={textVariant2('down', 'tween', 0.4, 0.5)}
						className='max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'
					>
						Unlock Your Potential with Cutting-Edge Digital Training
					</motion.h1>
					<motion.p
						variants={textVariant2('left', 'tween', 0.4, 0.5)}
						className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'
					>
						Welcome to SkillUstad, where we believe in the power of learning to
						transform lives. Whether you are a tech enthusiast, aspiring
						entrepreneur, or looking to upskill, our digital training programs
						are tailored to meet your aspirations.
					</motion.p>
					<motion.div
						variants={fadeIn('right', 'tween', 0.4, 0.5)}
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
					variants={slideIn('right', 'tween', 0.4, 0.7)}
					className='hidden lg:mt-0 lg:col-span-5 lg:flex'
				>
					<Image
					height={500}
					width={500}
						src='https://firebasestorage.googleapis.com/v0/b/digital-center-bot.appspot.com/o/Landing%20Page%20Image.jpg?alt=media&token=83ff7e6a-0c84-461b-b87a-3424d70b2472'
						alt='learnskills'
					/>
				</motion.div>
			</motion.div>
		</section>
	);
};
export default Hero;
