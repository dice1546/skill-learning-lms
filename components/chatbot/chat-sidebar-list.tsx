"use client";

import { database } from '@/firebase';
import { useUser } from '@clerk/nextjs';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { MessageSquare, Trash } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '../ui/separator';

export interface SidebarListProps {
	id: string;
}

export function SidebarList({ id }: SidebarListProps) {
	const [active, setActive] = useState(false);
	const pathName = usePathname();
	const router = useRouter();
	const { isLoaded, isSignedIn, user } = useUser();
	// if (!isLoaded || !isSignedIn || !user) {
	// 	return null;
	// }
	const messagesCollection = collection(
		database,
		'users',
		user?.primaryEmailAddress?.emailAddress!,
		'chats',
		id,
		'messages'
	);
	const [messages, loading, error] = useCollection(messagesCollection);
	const removeChat = async () => {
		await deleteDoc(
			doc(
				database,
				'users',
				user?.primaryEmailAddress?.emailAddress!,
				'chats',
				id
			)
		);
		router.replace('/dashboard/chat');
	};

	useEffect(() => {
		if (!pathName) return;
		setActive(pathName.includes(id));
	}, [pathName, id]); // include id in the dependency array

	return (
		<div>
			<Link
				href={`/dashboard/chat/${id}`}
				className={`chatRow justify-center ${active && 'bg-blue-200/90'}`}
			>
				<MessageSquare className='h-5 w-5 text-sky-700' />
				<p className='flex-1 hidden md:inline-flex truncate'>
					{messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
				</p>
				<Trash
					onClick={removeChat}
					className='h-5 w-5 text-sky-700 hover:text-red-700'
				/>
			</Link>
			<Separator />
		</div>
	);
}
