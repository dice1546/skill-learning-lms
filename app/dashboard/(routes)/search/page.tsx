import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { getCourses } from "@/actions/get-courses";
import { auth } from "@clerk/nextjs/server";


const Categories = dynamic(() => 
  import('./_components/categories').then(mod => mod.Categories)
 );
 
 const CoursesList = dynamic(() => 
  import('@/components/courses-list').then(mod => mod.CoursesList)
 );
 
 const SearchInput = dynamic(() => 
  import('@/components/search-input').then(mod => mod.SearchInput)
 );

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

let delayedRender = false; // Initialize a flag for the delay

const SearchPage = async ({ searchParams }: SearchPageProps) => {
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
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4 bg-white dark:bg-slate-900">
        <Categories items={categories} />
        <CoursesList items={courses} />
      </div>
    </>
  );
};

export default SearchPage;

// import { redirect } from "next/navigation";

// import { db } from "@/lib/db";
// import { SearchInput } from "@/components/search-input";
// import { getCourses } from "@/actions/get-courses";
// import { CoursesList } from "@/components/courses-list";

// import { Categories } from "./_components/categories";

// interface SearchPageProps {
//   searchParams: {
//     title: string;
//     categoryId: string;
//   }
// };

// const SearchPage = async ({
//   searchParams
// }: SearchPageProps) => {
//   const { userId } = auth();

//   if (!userId) {
//     return redirect("/dashboard");
//   }

//   const categories = await db.category.findMany({
//     orderBy: {
//       name: "asc"
//     }
//   });

//   await new Promise((resolve) => {
//     setTimeout(resolve, 3000); // 3000 milliseconds (3 seconds)
//   });

//   const courses = await getCourses({
//     userId,
//     ...searchParams,
//   });

//   return (
//     <>
//       <div className="px-6 pt-6 md:hidden md:mb-0 block">
//         <SearchInput />
//       </div>
//       <div className="p-6 space-y-4">
//         <Categories
//           items={categories}
//         />
//         <CoursesList items={courses} />
//       </div>
//     </>
//    );
// }

// export default SearchPage;
