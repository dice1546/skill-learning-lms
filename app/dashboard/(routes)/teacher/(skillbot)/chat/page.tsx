import { nanoid } from '@/lib/utils';

import dynamic from 'next/dynamic';

const Chat = dynamic(() => 
 import('@/components/chatbot/Chat').then(mod => mod.Chat)
);

export const runtime = 'edge';

export default function IndexPage() {
	const id = nanoid();

	return (
		<div>
			<Chat id={id} />
		</div>
	);
}
