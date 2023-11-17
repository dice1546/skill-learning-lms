import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { SearchInput } from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";

import { Categories } from "@/app/dashboard/(routes)/search/_components/categories";
import { CoursesListWeb } from "../components/course-list-web";

let delayedRender = false; // Initialize a flag for the delay

const SearchPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/dashboard");
  }

  try {
    if (!delayedRender) {
      await new Promise((resolve) => {
        setTimeout(resolve, 3000); // 3000 milliseconds (3 seconds)
      });

      delayedRender = true; // Set the flag to prevent further delays
    }

    // const categories = await db.category.findMany({
    //   orderBy: {
    //     name: "asc",
    //   },
    // });

    const courses = await getCourses({
      userId,
    });

    return (
      <>
        <CoursesListWeb items={courses} />
      </>
    );
  } catch (error) {
    console.error("Error fetching courses:", error);

    // Render a div with an error message
    return (
      <div className="text-md font-medium">
        Courses cannot be fetched due to a server error. Please try again later.
      </div>
    );
  }
};

export default SearchPage;


{/* <Categories
          items={categories}
        /> */}

        // interface SearchPageProps {
//   searchParams: {
//     title: string;
//     categoryId: string;
//   }
// };