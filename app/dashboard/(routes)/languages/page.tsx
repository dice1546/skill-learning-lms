import { getCourses } from "@/actions/get-courses";
import { auth } from "@clerk/nextjs/server";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import React from "react";

const CoursesList = dynamic(() => 
 import('@/components/courses-list').then(mod => mod.CoursesList)
);
interface LanguageProps {
  categoryId: string | null;
}

let delayedRender = false;

const Languages = async () => {
  
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
  const courses = await getCourses({
    userId,
    categoryId: "sdfsfd-sdfsdf-sfsdfsd-sfsxacs",
  });
  return (
    <>
      <div className="p-6 space-y-4">
        <CoursesList items={courses} />
      </div>
    </>
  );
};

export default Languages;