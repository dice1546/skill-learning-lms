"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Share } from "lucide-react";

import { IconBadge } from "@/components/icon-badge";
import { formatPrice } from "@/lib/format";
import { CourseProgress } from "@/components/course-progress";
import { useCallback } from "react";

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
}

export const CourseCard = ({
  id,
  title,
  imageUrl,
  chaptersLength,
  price,
  progress,
  category,
}: CourseCardProps) => {

  const shareCourse = useCallback(() => {
  	if (navigator.share) {
  	  navigator.share({
  		title: `Check out this course: ${title}`,
  		url: `${window.location.origin}/courses/${id}`,
  	  })
  	  .catch(console.error);
  	} else {
  	  // Fallback for browsers that do not support the Web Share API
  	  alert(`Share this link: ${window.location.origin}/courses/${id}`);
  	}
    }, [id, title]);
  return (
    <div className="group hover:shadow-sm transition overflow-hidden border hover:border-slate-600 dark:border-slate-600 dark:hover:border-blue-300 rounded-lg p-3 h-full">
      <Link href={`/courses/${id}`}>
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image fill className="object-cover" alt={title} src={imageUrl} />
        </div>
      </Link>
      <div className="flex flex-col pt-2">
        <div className="flex items-center justify-between">
          {" "}
          <Link href={`/courses/${id}`}>
            <div className="text-lg text-black dark:text-white md:text-base font-medium group-hover:text-sky-700 dark:group-hover:text-sky-200 transition line-clamp-2">
              {title}
            </div>
          </Link>
		  <Share className="h-5 w-5 dark:text-blue-300 text-black cursor-pointer" onClick={shareCourse} />{" "}
        </div>
        <p className="text-xs text-black dark:text-slate-300 text-muted-foreground">{category}</p>
        <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
          <div className="flex items-center gap-x-1 text-slate-500 dark:text-slate-200">
            <IconBadge size="sm" icon={BookOpen} />
            <span>
              {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
            </span>
          </div>
        </div>
        {progress !== null ? (
          <CourseProgress
            variant={progress === 100 ? "success" : "default"}
            size="sm"
            value={progress}
          />
        ) : (
          <div className="flex items-center justify-between">
            {" "}
            {/* Replace ShareIcon with the actual share icon component */}
            <p className="text-md md:text-sm left font-medium dark:text-white text-slate-900">
              {price === 0 ? "Enroll For Free" : formatPrice(price)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
