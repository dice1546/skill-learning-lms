import dynamic from 'next/dynamic';
import { redirect } from "next/navigation";
import { CheckCircle, Clock } from "lucide-react";

import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { auth } from '@clerk/nextjs/server';


const CoursesList = dynamic(() => 
 import('@/components/courses-list').then(mod => mod.CoursesList)
);

const InfoCard = dynamic(() => 
 import('./_components/info-card').then(mod => mod.InfoCard)
);

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/dashboard");
  }

  const {
    completedCourses,
    coursesInProgress
  } = await getDashboardCourses(userId);

  return (
    <div className="p-6 space-y-4 bg-white dark:bg-slate-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white dark:bg-slate-900">
       <InfoCard
          icon={Clock}
          label="In Progress"
          numberOfItems={coursesInProgress.length}
       />
       <InfoCard
          icon={CheckCircle}
          label="Completed"
          numberOfItems={completedCourses.length}
          variant="success"
       />
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-2 dark:text-gray-200 text-black">
          Subscribed Courses
        </h1>
      </div>
      <CoursesList
        items={[...coursesInProgress, ...completedCourses]}
      />
    </div>
  )
}
