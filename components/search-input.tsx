"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchInput = () => {
  const [value, setValue] = useState("")
  const debouncedValue = useDebounce(value);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentCategoryId = searchParams.get("categoryId");

  useEffect(() => {
    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        categoryId: currentCategoryId,
        title: debouncedValue,
      }
    }, { skipEmptyString: true, skipNull: true });

    router.push(url);
  }, [debouncedValue, currentCategoryId, router, pathname])

  return (
    <div className="relative">
      <Search
        className="h-4 w-4 absolute top-3 left-3 text-slate-600 dark:text-white"
      />
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-full xl:w-[600px] lg:w-[400px] md:w-[300px] text-black dark:placeholder:text-white placeholder:text-black  dark:text-white pl-9 rounded-full dark:bg-slate-700 bg-slate-100 focus-visible:ring-slate-600"
        placeholder="Search for a course"
      />
    </div>
  )
}