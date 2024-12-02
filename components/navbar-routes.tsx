import { UserButton, useAuth } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { headers } from "next/headers";

import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";

import { SearchInput } from "./search-input";
import { useRouter } from "next/navigation";

export const NavbarRoutes = () => {
  const headersList = headers();
  const path = headersList.get("x-pathname") || "";

  const isTeacherPage = path?.startsWith("/dashboard/teacher/(.*)");
  const isCoursePage = path?.includes("/dashboard/courses/(.*)");
  const isSearchPage = path === "/dashboard/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href="/dashboard">
            <Button
              size="sm"
              variant="outline"
              className="bg-white dark:bg-slate-900 border-slate-700 dark:border-slate-500 text-black dark:text-white"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Exit to Dashboard
            </Button>
          </Link>
        ) : isTeacher() ? (
          <Link href="/dashboard/teacher/courses">
            <Button
              size="sm"
              variant="outline"
              className="bg-white dark:bg-slate-900 border-slate-700 dark:border-slate-500 text-black dark:text-white"
            >
              Teacher mode
            </Button>
          </Link>
        ) : null}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
