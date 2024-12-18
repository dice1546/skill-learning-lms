import dynamic from "next/dynamic";

import { redirect } from "next/navigation";
import { File } from "lucide-react";

import { getChapter } from "@/actions/get-chapter";
import { auth } from "@clerk/nextjs/server";


const VideoPlayer = dynamic(() =>
  import("./_components/video-player").then((mod) => mod.VideoPlayer)
);

const CourseEnrollButton = dynamic(() =>
  import("./_components/course-enroll-button").then(
    (mod) => mod.CourseEnrollButton
  )
);

const CourseProgressButton = dynamic(() =>
  import("./_components/course-progress-button").then(
    (mod) => mod.CourseProgressButton
  )
);

const Banner = dynamic(() =>
  import("@/components/banner").then((mod) => mod.Banner)
);

const Separator = dynamic(() =>
  import("@/components/ui/separator").then((mod) => mod.Separator)
);

const Preview = dynamic(() =>
  import("@/components/preview").then((mod) => mod.Preview)
);

const ChapterIdPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/dashboard");
  }

  const {
    chapter,
    course,
    muxData,
    attachments,
    nextChapter,
    userProgress,
    purchase,
  } = await getChapter({
    userId,
    chapterId: params.chapterId,
    courseId: params.courseId,
  });

  if (!chapter || !course) {
    return redirect("/dashboard");
  }

  const isLocked = !chapter.isFree && !purchase;
  const completeOnEnd = !!purchase && !userProgress?.isCompleted;

  return (
    <div className="bg-white dark:bg-slate-900">
      {userProgress?.isCompleted && (
        <Banner variant="success" label="You already completed this chapter." />
      )}
      {isLocked && (
        <Banner
          variant="warning"
          label="You need to purchase this course to watch this chapter."
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">
          <VideoPlayer
            chapterId={params.chapterId}
            title={chapter.title}
            courseId={params.courseId}
            nextChapterId={nextChapter?.id}
            playbackId={muxData?.playbackId!}
            isLocked={isLocked}
            completeOnEnd={completeOnEnd}
          />
        </div>
        <div>
          <div className="p-4 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">
              {chapter.title}
            </h2>
            {purchase ? (
              <CourseProgressButton
                chapterId={params.chapterId}
                courseId={params.courseId}
                nextChapterId={nextChapter?.id}
                isCompleted={!!userProgress?.isCompleted}
              />
            ) : (
              <CourseEnrollButton
                courseId={params.courseId}
                price={course.price!}
              />
            )}
          </div>
          <Separator className="text-slate-700 dark:text-slate-600" />
          <div className="text-black dark:text-white">
            <Preview value={chapter.description!} />
          </div>
          {!!attachments.length && (
            <>
              <Separator className="text-slate-700 dark:text-slate-600" />
              <div className="p-4">
                {attachments.map((attachment) => (
                  <a
                    href={attachment.url}
                    target="_blank"
                    key={attachment.id}
                    className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                  >
                    <File />
                    <p className="line-clamp-1">{attachment.name}</p>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
