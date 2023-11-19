"use client";

import { Category, Course } from '@prisma/client';
import {  fadeIn, staggerContainer } from "@/lib/motion";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypingText } from './custom-text';
import { WebCourseCard } from './course-card-web';
import Link from 'next/link';

type CourseWithCategory = Course & {
	category: Category | null;
	chapters: { id: string }[];
  };

interface WebCoursesListProps {
	coursesItems: CourseWithCategory[];
}

export const CoursesListWeb = ({ coursesItems }: WebCoursesListProps) => {
	return (
		<motion.div
			variants={staggerContainer(0.1, 1)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.50 }}
			className='max-w-screen-xl px-4 py-8 w-full mx-auto mt-36 mb-20'
		>
			<div className='text-center flex flex-col items-center'>
			<TypingText title='| What to Learn?' textStyles='text-center' />
				<h1 className='text-3xl font-bold mt-2'>Popular Courses</h1>
				<div className='flex w-36 mt-1 mb-10 overflow-hidden rounded'>
					<div className='flex-1 h-2 bg-slate-400'></div>
					<div className='flex-1 h-2 bg-slate-600'></div>
					<div className='flex-1 h-2 bg-slate-800'></div>
				</div>
			</div>

			<div 
            // variants={fadeIn('right', 'tween', 0.3, 0.8)}
            className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4'>
				{coursesItems.map((item) => (
					<WebCourseCard
						key={item.id}
						id={item.id}
						title={item.title}
						imageUrl={item.imageUrl!}
						chaptersLength={item.chapters.length}
						price={item.price!}
						category={item?.category?.name!}
					/>
				))}
			</div>
			{coursesItems.length === 0 && (
				<div className='text-center text-sm text-muted-foreground mt-10'>
					No courses found
				</div>
			)}
            <div className='flex justify-center items-center mt-8'>
				<Link href="/learning">
                <Button variant="default">
                    View all Courses
                </Button>
				</Link>
            </div>
		</motion.div>
	);
};
