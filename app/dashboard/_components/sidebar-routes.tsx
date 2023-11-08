"use client";

import { BarChart, Compass, GraduationCap, Layout, List, Mail, MessageCircle, TrendingUp } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/dashboard/search",
  },
  {
    icon: MessageCircle,
    label: "Study with AI",
    href: "/dashboard/chat",
  },
  {
    icon: TrendingUp,
    label: "Career",
    href: "/dashboard/career",
  },
  {
    icon: GraduationCap,
    label: "Certifications",
    href: "/dashboard/certify",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/dashboard/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/dashboard/teacher/analytics",
  },
  {
    icon: Mail,
    label: "Student Queries",
    href: "/dashboard/teacher/queries",
  },
  {
    icon: MessageCircle,
    label: "Build with AI",
    href: "/dashboard/teacher/chat",
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/dashboard/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}