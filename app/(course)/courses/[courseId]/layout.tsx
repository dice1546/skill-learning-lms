import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { getProgress } from "@/actions/get-progress";

import dynamic from 'next/dynamic'

const CourseSidebar = dynamic(() => 
  import('./_components/course-sidebar').then(mod => mod.CourseSidebar), {
    loading: () => <div>Loading sidebar...</div> // Optional loading component
})

const CourseNavbar = dynamic(() => 
  import('./_components/course-navbar').then(mod => mod.CourseNavbar), {
    loading: () => <div>Loading navbar...</div> // Optional loading component
})

const CourseLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/dashboard")
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId,
            }
          }
        },
        orderBy: {
          position: "asc"
        }
      },
    },
  });

  if (!course) {
    return redirect("/dashboard");
  }

  const progressCount = await getProgress(userId, course.id);

  return (
    <div className="h-full bg-white dark:bg-slate-900">
      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <CourseNavbar
          course={course}
          progressCount={progressCount}
        />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <CourseSidebar
          course={course}
          progressCount={progressCount}
        />
      </div>
      <main className="md:pl-80 pt-[80px] h-full">
        {children}
      </main>
    </div>
  )
}

export default CourseLayout