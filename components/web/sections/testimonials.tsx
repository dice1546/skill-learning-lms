'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion, useInView, useAnimation } from 'framer-motion';
import { fadeIn, textVariant2 } from '@/lib/motion';
import { TypingText } from '../components/custom-text';
import { feedback } from '../constants';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
	const progressCircle = useRef<SVGSVGElement | null>(null);
	const progressContent = useRef<HTMLSpanElement | null>(null);
	const onAutoplayTimeLeft = (
		swiper: Swiper,
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

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
			slideControls.start('visible');
		}
	}, [isInView, mainControls, slideControls]);

	return (
		<div ref={ref}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: -150 },
					visible: { opacity: 1, y: 0 },
				}}
				initial='hidden'
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25, type: 'tween' }}
			>
				<div className='w-full flex flex-col justify-center text-center items-center md:flex-row sm:mb-16 mb-10 relative z-[1]'>
					<div className='text-center '>
						<div className='relative flex flex-col items-center'>
							<TypingText title='| Testimonials' textStyles='text-center' />
							<h1
								// variants={textVariant2('down', 'tween', 0.3, 1)}
								className='text-3xl font-bold mt-2'
							>
								{' '}
								What our students say?{' '}
							</h1>
							<div
								// variants={fadeIn('right', 'tween', 0.3, 1)}
								className='flex w-36 mt-1 mb-10 overflow-hidden rounded'
							>
								<div className='flex-1 h-2 bg-slate-400'></div>
								<div className='flex-1 h-2 bg-slate-600'></div>
								<div className='flex-1 h-2 bg-slate-800'></div>
							</div>
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
					className='mt-10 mb-10 max-w-screen-lg mx-auto z-30'
				>
					{feedback.map((feedbackItem) => (
						<SwiperSlide key={feedbackItem.id} className='w-auto h-auto'>

							<div className='flex flex-col items-center justify-center bg-white border pb-10 rounded-[20px] transform transition-all'>
								<div>
									<img
										src={feedbackItem.img}
										alt='slider images'
										className='w-[150px] h-[150px] mt-10 rounded-full'
									/>
								</div>
								<div>
									<h3 className='font-poppins font-bold text-black pt-10 pb-5'>
										{feedbackItem.name}
									</h3>
								</div>
								<div>
									<p className='font-poppins font-medium text-black pb-14 xs:mr-8 xs:ml-8 sm:mr-8 sm:ml-8'>
										{feedbackItem.content}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
					<div
						className='autoplay-progress absolute right-10 sm:bottom-1 xs:bottom-1 bottom-16 z-10 sm:w-12 sm:h-12 xs:w-12 xs:h-12 w-24 h-24 flex items-center justify-center font-bold text-swiper-theme-color'
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
					</div>
				</Swiper>
			</motion.div>
		</div>
	);
};
export default Testimonials;
