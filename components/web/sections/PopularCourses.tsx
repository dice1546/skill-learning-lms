import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { SearchInput } from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";


import { Categories } from "@/app/dashboard/(routes)/search/_components/categories"; 
import { CoursesListWeb } from "../components/course-list-web";

// interface SearchPageProps {
//   searchParams: {
//     title: string;
//     categoryId: string;
//   }
// };

let delayedRender = false; // Initialize a flag for the delay

const SearchPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/dashboard");
  }

  if (!delayedRender) {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000); // 3000 milliseconds (3 seconds)
    });

    delayedRender = true; // Set the flag to prevent further delays
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc"
    }
  });

  const courses = await getCourses({
    userId,
  });

  return (
    <>
      
        {/* <Categories
          items={categories}
        /> */}
        <CoursesListWeb items={courses} />

    </>
  );
}

export default SearchPage;