import { Skeleton } from '@/components/ui/skeleton';
import {
	Card,
	CardContent,
	CardHeader,
} from '@/components/ui/card';

const SkeletonCard = () => {
	return (
		<Card className='group hover:shadow-sm transition overflow-hidden border bg-gray-600 dark:bg-slate-700 dark:border-slate-500 rounded-lg p-3 h-full'>
			<CardHeader>
				<Skeleton className='relative w-full bg-gray-400 dark:bg-slate-900 aspect-video rounded-md overflow-hidden' />
			</CardHeader>
			<CardContent className='flex flex-col pt-2'>
				<Skeleton className='flex items-center justify-between bg-gray-400 dark:bg-slate-900'>
					<Skeleton className='text-lg md:text-base font-medium transition line-clamp-2 bg-gray-400 dar:bg-slate-900' />
					<Skeleton className='h-5 w-5 bg-gray-400 dar:bg-slate-900' />
				</Skeleton>
			</CardContent>
		</Card>
	);
};
export default SkeletonCard;
