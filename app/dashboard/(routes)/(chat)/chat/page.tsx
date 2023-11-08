import { nanoid } from '@/lib/utils';
import { Chat } from '@/components/chatbot/Chat';

export const runtime = 'edge';

export default function IndexPage() {
	const id = nanoid();

	return (
		<div>
			<Chat id={id} />
		</div>
	);
}
