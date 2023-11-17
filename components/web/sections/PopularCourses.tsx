import { getWebCourses } from "@/actions/get-web-courses";
import { WebCourseCard } from "../components/course-card-web";
import { CoursesListWeb } from "../components/course-list-web";


// interface WebSearchPageProps {
//   searchParams: {
//     title: string;
//     categoryId: string;
//   }
// };

const SearchPage = async () => {

  try {
    const courses = await getWebCourses({
    });

    return (
      <>
        <CoursesListWeb coursesItems={courses} />
      </>
    );
  } catch (error) {
    console.error("Error fetching courses:", error);
    return (
      <div className="text-md font-medium">
        Courses cannot be fetched due to a server error. Please try again later.
      </div>
    );
  }
};

export default SearchPage;
