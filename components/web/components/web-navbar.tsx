"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { navVariants } from "@/lib/motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const WebNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} relative bg-white dark:bg-black`}
    >
      <div className="max-w-screen-xl px-4 w-full mx-auto flex justify-between mt-5 gap-10">
        <Link href="/">
          <Image
            height={90}
            width={200}
            src="/nerd.png"
            alt="search"
            className="mt-3 z-50 cursor-pointer object-contain"
          />
        </Link>
        <motion.ul
          className='list-none sm:flex md:flex hidden justify-end px-5 items-center flex-1'
        >
          <Link href="https://creativnerds.com/learn">
            <Button
              variant="ghost"
              className="border text-black dark:text-white ml-3 mr-3"
            >
              Courses
            </Button>
          </Link>
          <Link href="https://creativnerds.com/learn">
            <Button
              variant="ghost"
              className="border text-black dark:text-white ml-3 mr-3"
            >
              Pricing
            </Button>
          </Link>
          <Link href="/dashboard" className="ml-3 mr-3">
            <Button
              variant="outline"
              className="bg-whte dark:bg-black text-black dark:text-white"
            >
              Log in
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline">Sign Up</Button>
          </Link>
        </motion.ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div className="dark:hidden">
            <Image
              height={24}
              width={24}
			  src={toggle ? "/close.svg" : "/menu.svg"}
              alt="learnskills"
			  onClick={() => setToggle((prev) => !prev)}
            />
          </div>
          <div className="hidden dark:block">
            <Image
              height={24}
              width={24}
              alt="learnskills"
			  src={toggle ? "/whiteclose.svg" : "/whitemenu.svg"}
			  onClick={() => setToggle((prev) => !prev)}
            />
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-16 bg-white dark:bg-black absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-2xl z-30 shadow-2xl border border-slate-600 dark:border-slate-200 sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
            
              <Link href="https://creativnerds.com/learn">
                <Button variant="ghost" className="mb-2 mt-2 text-black dark:text-white">
                  About Us
                </Button>
              </Link>
              <Separator />
              <Link href="https://creativnerds.com/learn">
                <Button variant="ghost" className="mb-2 mt-2 text-black dark:text-white">
                  Courses
                </Button>
              </Link>
              <Separator />
              <Link href="/dashboard" className="mt-3 mb-3 text-black dark:text-white">
                <Button variant="outline">Log in</Button>
              </Link>
              <Separator />
              <Link href="/dashboard" className="mt-3 text-black dark:text-white">
                <Button variant="default">Sign Up</Button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default WebNavbar;
