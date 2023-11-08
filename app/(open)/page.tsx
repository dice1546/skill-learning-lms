import WebNavbar from "@/components/web/components/web-navbar"
import Hero from "@/components/web/sections/Hero"
import PopularCourses from "@/components/web/sections/PopularCourses"
import CareerOportunities from "@/components/web/sections/career-opportunities"
import ExplorePage from "@/components/web/sections/explore-section"
import ForTeachers from "@/components/web/sections/for-teachers"
import GetStarted from "@/components/web/sections/get-started"
import Testimonials from "@/components/web/sections/testimonials"
import WebFooter from "@/components/web/sections/web-footer"

const LandingPage = () => {
  return (
    <div className='bg-white overflow-hidden'>
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
	</div>
  )
}
export default LandingPage