'use client';

import { fadeIn, slideIn, staggerContainer, textVariant2 } from '@/lib/motion';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TypingText } from '../components/custom-text';
import Image from 'next/image';

const WhyChoseUs = () => {
	return (
		<motion.section
			variants={staggerContainer(0.1, 1)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.10 }}
			className='flex items-center bg-white lg:h-screen font-poppins '
		>
			<div className='justify-center flex-1 max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6'>
				<div className='px-4 mb-10 md:text-center md:items-center xs:text-center xs:items-center sm:text-center sm:items-center md:mb-20'>
					<TypingText title='| Who we are' textStyles='text-center' />
					<motion.h2
						variants={fadeIn('left', 'spring', 0.3, 0.5)}
						className='pb-2 text-2xl font-bold text-gray-800 md:text-4xl'
					>
						Whay choose us?
					</motion.h2>
					<motion.div
                    variants={slideIn("right", "tween", 0.3, 0.5)} className='flex w-32 md:items-center sm:items-center mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14'>
						<div className='flex-1 h-2 bg-slate-400'></div>
						<div className='flex-1 h-2 bg-slate-600'></div>
						<div className='flex-1 h-2 bg-slate-800'></div>
					</motion.div>
				</div>
				<div className='flex flex-wrap items-center'>
					<div className='w-full px-4 mb-10 md:w-1/2 lg:mb-0 '>
						<motion.h2 
                        variants={textVariant2("left", "tween", 0.5, 0.4)}
                        className='mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300'>
							We provide the most up to date skills courses
						</motion.h2>
						<motion.p 
                        variants={textVariant2("left", "tween", 0.5, 0.4)}
                        className='mb-4 text-base leading-7 text-gray-500 dark:text-gray-400'>
							We believe in delievering high quality content with the best
							practices in the field with the most demanded skills in the
							market.
						</motion.p>
						<ul className='mb-10'>
							<motion.li 
                            variants={textVariant2("left", "tween", 0.5, 0.4)}
                            className='flex items-center mb-4 text-base text-gray-600 dark:text-gray-400'>
								<span className='mr-3 text-blue-500 dark:text-blue-400 '>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										className='w-5 h-5 bi bi-arrow-right-circle-fill'
										viewBox='0 0 16 16'
									>
										<path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z' />
									</svg>
								</span>
								Online Assignments
							</motion.li>
							<motion.li 
                            variants={textVariant2("left", "tween", 0.5, 0.4)}
                            className='flex items-center mb-4 text-base text-gray-600 dark:text-gray-400'>
								<span className='mr-3 text-blue-500 dark:text-blue-400'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										className='w-5 h-5 bi bi-arrow-right-circle-fill'
										viewBox='0 0 16 16'
									>
										<path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z' />
									</svg>
								</span>
								Online Quizzes
							</motion.li>
							<motion.li 
                            variants={textVariant2("left", "tween", 0.5, 0.4)}
                            className='flex items-center mb-4 text-base text-gray-600 dark:text-gray-400'>
								<span className='mr-3 text-blue-500 dark:text-blue-400'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										className='w-5 h-5 bi bi-arrow-right-circle-fill'
										viewBox='0 0 16 16'
									>
										<path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z' />
									</svg>
								</span>
								Smart AI Based Learning
							</motion.li>
							<motion.li 
                            variants={textVariant2("left", "tween", 0.5, 0.4)}
                            className='flex items-center mb-4 text-base text-gray-600 dark:text-gray-400'>
								<span className='mr-3 text-blue-500 dark:text-blue-400 '>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										className='w-5 h-5 bi bi-arrow-right-circle-fill'
										viewBox='0 0 16 16'
									>
										<path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z' />
									</svg>
								</span>
								Support Team of Teachers
							</motion.li>
						</ul>
                        <motion.div 
                        variants={fadeIn("right", "tween", 0.4, 0.4)}>
						<Link href='/about'>
							<Button>Learn More</Button>
						</Link>
                        </motion.div>
					</div>
					<motion.div 
                    variants={slideIn("right", "spring", 0.5, 0.5)}
                    className='relative w-full px-4 mb-10 md:w-1/2 lg:mb-0'>
						<Image
							src='https://utfs.io/f/c0037a74-67c7-44b2-b9de-b564d673425f-rqkiib.jpg'
							alt=''
							height={400}
							width={500}
							className='relative z-40 object-cover shadow-lg rounded-xl'
						/>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};
export default WhyChoseUs;
