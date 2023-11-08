import { Skeleton } from '@/components/ui/skeleton';
import {
	Card,
	CardContent,
	CardHeader,
} from '@/components/ui/card';

const SkeletonCard = () => {
	return (
		<Card className='group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full'>
			<CardHeader>
				<Skeleton className='relative w-full aspect-video rounded-md overflow-hidden' />
			</CardHeader>

			<CardContent className='flex flex-col pt-2'>
				<Skeleton className='flex items-center justify-between'>
					<Skeleton className='text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2' />
					<Skeleton className='h-5 w-5 text-blue-700' />
				</Skeleton>
			</CardContent>
		</Card>
	);
};
export default SkeletonCard;
