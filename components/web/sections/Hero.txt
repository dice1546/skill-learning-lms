"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "@/styles";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const productsAndService = [
	{
		id: 'product-1',
		title: 'Learn Modern Skills',
		image: '/dig.jpg',
	},
	{
		id: 'product-2',
		title: 'Web Development',
		image: '/dig.jpg',
	},
	{
		id: 'product-3',
		title: 'Artificial Intelligence',
		image: '/dig.jpg',
	},
	{
		id: 'product-4',
		title: 'Graphic Designing',
		image: '/dig.jpg',
	},
	{
		id: 'product-5',
		title: 'App Development',
		image: '/dig.jpg',
	},
];

const Products = () => {
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

	const navigateToModernKitchen = () => {
		window.location.href = '/modernKitchen'; // Update the window location when the first slide is clicked
	};
	const navigateToTraditionalKitchen = () => {
		window.location.href = '/traditionalKitchen'; // Update the window location when the first slide is clicked
	};
	const navigateToBedrooms = () => {
		window.location.href = '/bedrooms'; // Update the window location when the first slide is clicked
	};
	const navigateToStorageSolutions = () => {
		window.location.href = '/storage'; // Update the window location when the first slide is clicked
	};
	const navigateToConsult = () => {
		window.location.href = '/consult'; // Update the window location when the first slide is clicked
	};

	return (
		<div ref={ref}>
			<motion.div
				variants={{
					hidden: { opacity: 0, x: 150 },
					visible: { opacity: 1, x: 0 },
				}}
				initial='hidden'
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.5, type: 'tween' }}
			>
				{/* <h1
					className={`font-poppins font-bold text-black pt-10 ${styles.heading2}`}
				>
					Products and Services
				</h1> */}
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					centeredSlides
					centeredSlidesBounds
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					navigation
					className='mt-1 mb-5'
				>
					{productsAndService.map((product, index) => (
						<SwiperSlide
							key={product.id}
							style={{ width: '1280', height: '500' }}
							className='shadow-lg rounded-[10%] animate-slider-right'
							onClick={() => {
								if (index === 0) {
									navigateToModernKitchen();
								}
								if (index === 1) {
									navigateToTraditionalKitchen();
								}
								if (index === 2) {
									navigateToBedrooms();
								}
								if (index === 3) {
									navigateToStorageSolutions();
								}
								if (index === 4) {
									navigateToConsult();
								}
							}}
						>
							<div
								className='flex flex-wrap transform transition-all hover:scale-105 
              sm:items-center sm:justify-center 
              xs:items-center xs:justify-center'
								style={{ position: 'relative' }}
							>
								<img
									src={product.image}
									alt='name'
									className='rounded-sm w-full h-[500px] object-cover'
								/>
								<div className='absolute text-center-left ml-20 text-6xl left-0 right-0 bg-opacity-70 text-white p-2'>
									<h3 className='font-poppins font-bold'>{product.title}</h3>
                  <div>
                    <h4 className='font-poppins font-medium text-3xl mt-5'>Get Started</h4>
                  </div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
		</div>
	);
};

export default Products;
