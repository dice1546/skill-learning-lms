// import WebNavbar from "@/components/web/components/web-navbar"
// import Hero from "@/components/web/sections/Hero"
// import PopularCourses from "@/components/web/sections/PopularCourses"
// import CareerOportunities from "@/components/web/sections/career-opportunities"
// import ExplorePage from "@/components/web/sections/explore-section"
// import ForTeachers from "@/components/web/sections/for-teachers"
// import GetStarted from "@/components/web/sections/get-started"
// import Testimonials from "@/components/web/sections/testimonials"
// import WebFooter from "@/components/web/sections/web-footer"

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LandingPage = () => {
	return (
		<div className='p-6 flex flex-col justify-center items-center h-full'>
			<div className='bg-gray-100 p-6 rounded-xl shadow-md'>
				<div>
					<h1 className='text-black font-bold text-2xl text-center mb-3'>
						Comming Soon!
					</h1>
				</div>
				<p className='text-black'>
					An online platform that will help you learn the modern digital skills
					in simple ways.
				</p>
			</div>
			<Link href='/dashboard'>
				<Button variant='outline' className='mt-5 text-white bg-black hover:bg-slate-600 hover:text-white'>Go to Dashboard</Button>
			</Link>
		</div>
	);
};
export default LandingPage;

{
	/* <div className='bg-white overflow-hidden'>
 <WebNavbar />
		<Hero />
		<div className='relative'>
			<PopularCourses />
			<div className='gradient-03 z-0' />
			<ExplorePage />
		</div>
		<div className='relative'>
			<GetStarted />
			<div className='gradient-04 z-0' />
			<CareerOportunities />
		</div>
		<Testimonials />
		<div className='relative'>
			<ForTeachers />
			<div className='gradient-04 z-0' />
		</div>
		<WebFooter />
		</div> */
}
