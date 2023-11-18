"use client";

import { BarChart, Compass, DollarSign, GraduationCap, HelpCircleIcon, LanguagesIcon, Layout, List, Mail, MessageCircle, MessageSquareIcon, TrendingUp } from "lucide-react";
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
    label: "Browse Courses",
    href: "/dashboard/search",
  },
  {
    icon: LanguagesIcon,
    label: "Learn Languages",
    href: "/dashboard/languages",
  },
  {
    icon: Mail,
    label: "Chat with Instructor",
    href: "/dashboard/chat-with-instructor",
  },
  {
    icon: MessageCircle,
    label: "Study with AI",
    href: "/dashboard/chat",
  },
  {
    icon: TrendingUp,
    label: "Career & Jobs",
    href: "/dashboard/career",
  },
  {
    icon: GraduationCap,
    label: "Certifications",
    href: "/dashboard/certify",
  },
  {
    icon: DollarSign,
    label: "Subscriptions",
    href: "/dashboard/subscription",
  },
  {
    icon: HelpCircleIcon,
    label: "Get Help",
    href: "/dashboard/help",
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
  {
    icon: HelpCircleIcon,
    label: "Get Help",
    href: "/dashboard/help",
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