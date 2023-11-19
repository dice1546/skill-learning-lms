import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition-all">
        <Menu className="text-black dark:text-white"/>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white dark:bg-slate-900">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}