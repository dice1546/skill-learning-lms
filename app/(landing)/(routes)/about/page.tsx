import WebNavbar from '@/components/web/components/web-navbar';
import ForTeachers from '@/components/web/sections/for-teachers';
import Testimonials from '@/components/web/sections/testimonials';
import WebFooter from '@/components/web/sections/web-footer';

const AboutUs = () => {
	return (
		<div className='bg-white dark:bg-black overflow-hidden'>
			<div>
				<WebNavbar />
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
export default AboutUs;
