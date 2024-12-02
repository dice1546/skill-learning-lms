import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';
import { nanoid } from '@/lib/utils';
import { clerkClient, getAuth } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {database} from "@/firebase";

export const runtime = 'edge';

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export async function POST(req: NextRequest) {
	const { userId } = getAuth(req);
	const user = userId ? await clerkClient.users.getUser(userId) : null;
	const json = await req.json();
	const { messages, previewToken } = json;
	const userEmail = user?.emailAddresses[0].emailAddress || "";
	if (!userId) {
		return new Response('Unauthorized', {
			status: 401,
		});
	}
	if (previewToken) {
		configuration.apiKey = previewToken;
	}
	const res = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages,
		temperature: 0.7,
		stream: true,
	});
	const stream = OpenAIStream(res, {
		async onCompletion(completion) {
			const title = json.messages[0].content.substring(0, 100);
			const id = json.id ?? nanoid();
			const createdAt = Date.now();
			const path = `/dashboard/chat/${id}`
			const payload = {
				id,
				title,
				userId,
				createdAt,
				path,
				messages: JSON.stringify([
					...messages,
					{
						content: completion,
						role: 'assistant',
					},
				]),
			};
			const addDocMessage = async () => {
				const message: Message = {
				  text: completion || 'Unable to find an answer. Please try again.',
				  createdAt: serverTimestamp(),
				  user: {
					_id: "SkillBot",
					name: "`SkillBot`",
					avatar: "https://links.papareact.com/89k",
				  },
				}
				const document = await addDoc(
				  collection(
					database,
					"users",
					userEmail,
					"chats",
					id,
					"messages",
				  ),
				  message
				)
			};
			return addDocMessage();
		},
	});
	return new StreamingTextResponse(stream);
}