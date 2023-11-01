"use client";

import { BarChart, Compass, GraduationCap, Layout, List, Mail, MessageCircle, TrendingUp } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
  {
    icon: MessageCircle,
    label: "Study with AI",
    href: "/chat",
  },
  {
    icon: TrendingUp,
    label: "Career",
    href: "/career",
  },
  {
    icon: GraduationCap,
    label: "Certifications",
    href: "/certify",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
  {
    icon: Mail,
    label: "Student Queries",
    href: "/teacher/queries",
  },
  {
    icon: MessageCircle,
    label: "Build with AI",
    href: "/teacher/skillbot",
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

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