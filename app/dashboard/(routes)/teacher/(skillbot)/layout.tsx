"use client";
import { Toaster } from 'react-hot-toast';
import { Providers } from '@/components/provider';
import { Header } from '@/components/chatbot/header';
import { cn } from '@/lib/utils';
import { fontMono, fontSans } from '@/lib/fonts';
import { TailwindIndicator } from '@/components/chatbot/tailwind-indicator';

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full'>
			<Toaster />
			<Providers attribute='class' defaultTheme='system' enableSystem>
				<div className='flex flex-col min-h-screen'>
					{/* @ts-ignore */}
					 <Header />
					<main className='pt-[20px] h-full'>{children}</main>
				</div>
				<TailwindIndicator />
			</Providers>
		</div>
	);
};

export default ChatLayout;
