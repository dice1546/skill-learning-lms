import Image from "next/image"
import { SidebarRoutes } from "./sidebar-routes"

export const Sidebar = () => {
  return (
    <div className="h-full border-r dark:border-r-slate-500 flex flex-col overflow-y-auto bg-white dark:bg-slate-900 shadow-sm">
      <div className="p-6">
        <Image src="/skillustad.png" height={100} width={170} alt="skillustad" />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  )
}