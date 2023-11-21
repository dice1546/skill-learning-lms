'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion, useInView, useAnimation } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant2 } from '@/lib/motion';
import { TypingText } from '../components/custom-text';
import { feedback } from '../constants';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import SwiperCore from 'swiper';

const Testimonials = () => {
	const progressCircle = useRef<SVGSVGElement | null>(null);
	const progressContent = useRef<HTMLSpanElement | null>(null);
	const onAutoplayTimeLeft = (
		swiper: SwiperCore,
  timeLeft: number,
  percentage: number
	) => {
		if (progressCircle.current && progressContent.current) {
			progressCircle.current.style.setProperty(
				'--progress',
				(1 - percentage).toString()
			);
			progressContent.current.textContent = `${Math.ceil(timeLeft / 1000)}s`;
		}
	};

	// const onAutoplayTimeLeft = ({
	// 	time,
	// 	progress,
	// }: {
	// 	time: number;
	// 	progress: number;
	// }) => {
	// 	if (progressCircle.current && progressContent.current) {
	// 		progressCircle.current.style.setProperty(
	// 			'--progress',
	// 			(1 - progress).toString()
	// 		);
	// 		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	// 	}
	// };

	// const ref = useRef(null);
	// const isInView = useInView(ref, { once: true });

	// const mainControls = useAnimation();
	// const slideControls = useAnimation();

	// useEffect(() => {
	// 	if (isInView) {
	// 		mainControls.start('visible');
	// 		slideControls.start('visible');
	// 	}
	// }, [isInView, mainControls, slideControls]);

	return (
		<div>
			<motion.div
				variants={staggerContainer(0.1, 1)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.10 }}
				className='mt-10'
			>
				<div className='w-full flex flex-col justify-center text-center items-center md:flex-row sm:mb-16 mb-10 relative z-[1]'>
					<div className='text-center '>
						<div className='relative flex flex-col items-center'>
							<TypingText title='| Testimonials' textStyles='text-center' />
							<motion.h1
								variants={textVariant2('down', 'tween', 0.3, 0.7)}
								// variants={textVariant2('down', 'tween', 0.3, 1)}
								className='text-3xl font-bold mt-2 text-black dark:text-white'
							>
								{' '}
								What our students say?{' '}
							</motion.h1>
							<motion.div
								variants={fadeIn('right', 'tween', 0.3, 0.7)}
								className='flex w-36 mt-1 mb-10 overflow-hidden rounded'
							>
								<div className='flex-1 h-2 bg-slate-400'></div>
								<div className='flex-1 h-2 bg-slate-600'></div>
								<div className='flex-1 h-2 bg-slate-800'></div>
							</motion.div>
						</div>
					</div>
				</div>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					onAutoplayTimeLeft={onAutoplayTimeLeft}
					className='mt-10 mb-10 border-blue-400 border-1 shadow-xl max-w-screen-lg mr-0 mx-auto z-30'
				>
					{feedback.map((feedbackItem) => (
						<SwiperSlide key={feedbackItem.id} className='w-auto h-auto'>
							<motion.div
								variants={fadeIn('right', 'tween', 0.3, 0.5)}
								className='flex flex-col z-30 items-center justify-center px-4 bg-white dark:bg-slate-800 border pb-10 rounded-[20px] transform transition-all'
							>
								<div>
									<Image
										src={feedbackItem.img}
										alt='slider images'
										height={150}
										width={150}
										className='mt-10 rounded-full'
									/>
								</div>
								<div>
									<h3 className='font-poppins font-bold text-black dark:text-white pt-10 pb-5'>
										{feedbackItem.name}
									</h3>
								</div>
								<div>
									<p className='font-poppins font-medium text-black dark:text-white pb-14 xs:mr-8 xs:ml-8 sm:mr-8 sm:ml-8'>
										{feedbackItem.content}
									</p>
								</div>
							</motion.div>
						</SwiperSlide>
					))}
					{/* <motion.div
						variants={fadeIn('left', 'tween', 0.3, 0.5)}
						className='autoplay-progress absolute right-10 sm:bottom-1 xs:mt-10 xs:bottom-1 bottom-16 sm:w-8 sm:h-8 xs:w-8 xs:h-8 w-24 h-24 flex items-center justify-center font-bold text-swiper-theme-color'
						slot='container-end'
					>
						<svg
							viewBox='0 0 48 48'
							ref={progressCircle}
							className='absolute left-0 top-0 z-10 w-full h-full stroke-current'
						>
							<circle
								cx='24'
								cy='24'
								r='20'
								className='fill-none stroke-current stroke-4 stroke-swiper-theme-color'
								style={{
									strokeDashoffset: 'calc(125.6 * (1 - var(--progress)))',
									strokeDasharray: '125.6',
								}}
							></circle>
						</svg>
						<span ref={progressContent}></span>
					</motion.div> */}
				</Swiper>
			</motion.div>
		</div>
	);
};
export default Testimonials;
