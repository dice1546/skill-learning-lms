import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'
import { Chat } from '@/components/chatbot/Chat'
import { getChat } from '@/actions/chat-actions' 
 
export const runtime = 'edge'
export const preferredRegion = 'home'

export interface ChatPageProps {
  id: string;
}

export async function generateMetadata({
  id,
}: ChatPageProps): Promise<Metadata> {
  const {userId} = auth()

  if (!userId) {
    return {}
  }

  const chat = await getChat(id, userId)
  return {
    title: chat?.title.toString().slice(0, 50) ?? 'Chat'
  }
}

export default async function ChatPage({ id }: ChatPageProps) {
  const {userId} = auth()

  if (!userId) {
    redirect("/dashboard")
  }

  const chat = await getChat(id, userId)

  if (!chat) {
    notFound()
  }

  if (chat?.userId !== userId) {
    notFound()
  }

  return <Chat id={chat.id} initialMessages={chat.messages} />
}
