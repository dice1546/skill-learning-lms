import dynamic from 'next/dynamic';

const Chat = dynamic(() => 
 import('@/components/chatbot/Chat').then(mod => mod.Chat)
);
import { nanoid } from '@/lib/utils';


export const runtime = 'edge';

export default function IndexPage() {
	const id = nanoid();

	return (
		<div>
			<Chat id={id} className='px-6 space-y-4' />
		</div>
	);
}
