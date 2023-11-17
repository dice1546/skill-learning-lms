import WebNavbar from '@/components/web/components/web-navbar';
import ForTeachers from '@/components/web/sections/for-teachers';
import Testimonials from '@/components/web/sections/testimonials';
import WebFooter from '@/components/web/sections/web-footer';
import ProductDetails from './_components/product-details';
import RecommendedCourses from './_components/recomended-course';

const CourseIdPage = () => {
	return (
		<div className='bg-white overflow-hidden'>
			<div>
				<WebNavbar />
			</div>
      <ProductDetails />
      {/* <RecommendedCourses /> */}
			<div className='relative mt-5 mb-20'>
				<Testimonials />
				<div className='gradient-04 z-0' />
				<ForTeachers />
			</div>
			<WebFooter />
		</div>
	);
};
export default CourseIdPage;
