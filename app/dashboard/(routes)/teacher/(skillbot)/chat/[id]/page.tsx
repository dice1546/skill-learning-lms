import dynamic from 'next/dynamic';
import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { getChat } from '@/actions/chat-actions' 
import { auth } from '@clerk/nextjs/server';


const Chat = dynamic(() => 
 import('@/components/chatbot/Chat').then(mod => mod.Chat)
);
export const runtime = 'edge'
export const preferredRegion = 'home'

export interface ChatPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params
}: ChatPageProps): Promise<Metadata> {
  const {userId} = auth()

  if (!userId) {
    return {}
  }

  const chat = await getChat(params.id, userId)
  return {
    title: chat?.title.toString().slice(0, 50) ?? 'Chat'
  }
}

export default async function ChatPage({ params }: ChatPageProps) {
  const {userId} = auth()

  if (!userId) {
    redirect("/")
  }

  const chat = await getChat(params.id, userId)

  if (!chat) {
    notFound()
  }

  if (chat?.userId !== userId) {
    notFound()
  }

  return <Chat id={chat.id} initialMessages={chat.messages} />
}
