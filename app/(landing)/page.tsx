import WebNavbar from '@/components/web/components/web-navbar';
import Hero from '@/components/web/sections/Hero';
import PopularCourses from '@/components/web/sections/PopularCourses';
import ForTeachers from '@/components/web/sections/for-teachers';
import Testimonials from '@/components/web/sections/testimonials';
import WebFooter from '@/components/web/sections/web-footer';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CoreValues from '@/components/web/sections/core-values';
import WhyChoseUs from '@/components/web/sections/why-chose-us';

const LandingPage = () => {
	return (
		<div className='bg-white overflow-hidden'>
			<div>
			<WebNavbar />
			</div>
			<Hero />
			<CoreValues />
			<PopularCourses />
			<WhyChoseUs />
			<div className='relative'>
				{/* <div className='gradient-03 z-0' /> */}
			</div>
			<div className='relative mt-5 mb-20'>
			<Testimonials />
				<div className='gradient-04 z-0' />
			<ForTeachers />
			</div>
			<WebFooter />
		</div>
	);
};
export default LandingPage;