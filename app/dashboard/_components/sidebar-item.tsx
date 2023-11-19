"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/dashboard" && href === "/dashboard") ||
    pathname === href ||
    pathname?.startsWith(`${href}/dashboard`);

  const onClick = () => {
    router.push(href);
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 dark:text-white text-sm font-[500] pl-6 transition-all hover:text-slate-600 dark:hover:text-slate-100 hover:bg-slate-300/20 dark:hover:bg-slate-500/20",
        isActive && "text-sky-700 dark:text-white bg-sky-200/20 dark:bg-sky-700 rounded-xl dark:hover:bg-slate-700 hover:bg-sky-200/20 hover:text-sky-600"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-slate-500",
            isActive && "text-black dark:text-white"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 dark:border-white h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  )
}