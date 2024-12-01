import dynamic from 'next/dynamic';
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CircleDollarSign, File, LayoutDashboard, ListChecks } from "lucide-react";

import { db } from "@/lib/db";

const IconBadge = dynamic(() => 
 import('@/components/icon-badge').then(mod => mod.IconBadge)
);

const Banner = dynamic(() => 
 import('@/components/banner').then(mod => mod.Banner)
);

const TitleForm = dynamic(() => 
 import('./_components/title-form').then(mod => mod.TitleForm)
);

const DescriptionForm = dynamic(() => 
 import('./_components/description-form').then(mod => mod.DescriptionForm)
);

const ImageForm = dynamic(() => 
 import('./_components/image-form').then(mod => mod.ImageForm)
);

const CategoryForm = dynamic(() => 
 import('./_components/category-form').then(mod => mod.CategoryForm)
);

const PriceForm = dynamic(() => 
 import('./_components/price-form').then(mod => mod.PriceForm)
);

const AttachmentForm = dynamic(() => 
 import('./_components/attachment-form').then(mod => mod.AttachmentForm)
);

const ChaptersForm = dynamic(() => 
 import('./_components/chapters-form').then(mod => mod.ChaptersForm)
);

const Actions = dynamic(() => 
 import('./_components/actions').then(mod => mod.Actions)
);

const CourseIdPage = async ({
  params
}: {
  params: { courseId: string }
}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/dashboard");
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      userId
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc",
        },
      },
      attachments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  if (!course) {
    return redirect("/dashboard");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
    course.chapters.some(chapter => chapter.isPublished),
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!course.isPublished && (
        <Banner
          label="This course is unpublished. It will not be visible to the students."
        />
      )}
      <div className="p-6 bg-white dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium dark:text-gray-200 text-black">
              Course setup
            </h1>
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Complete all fields {completionText}
            </span>
          </div>
          <Actions
            disabled={!isComplete}
            courseId={params.courseId}
            isPublished={course.isPublished}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl dark:text-gray-200 text-black">
                Customize your course
              </h2>
            </div>
            <TitleForm
              initialData={course}
              courseId={course.id}
            />
            <DescriptionForm
              initialData={course}
              courseId={course.id}
            />
            <ImageForm
              initialData={course}
              courseId={course.id}
            />
            <CategoryForm
              initialData={course}
              courseId={course.id}
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl dark:text-gray-200 text-black">
                  Course chapters
                </h2>
              </div>
              <ChaptersForm
                initialData={course}
                courseId={course.id}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={CircleDollarSign} />
                <h2 className="text-xl dark:text-gray-200 text-black">
                  Sell your course
                </h2>
              </div>
              <PriceForm
                initialData={course}
                courseId={course.id}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={File} />
                <h2 className="text-xl dark:text-gray-200 text-black">
                  Resources & Attachments
                </h2>
              </div>
              <AttachmentForm
                initialData={course}
                courseId={course.id}
              />
            </div>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default CourseIdPage;