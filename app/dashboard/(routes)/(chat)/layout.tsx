"use client";
import { Toaster } from 'react-hot-toast';
import { Providers } from '@/components/provider';
import { Header } from '@/components/chatbot/header';
import { TailwindIndicator } from '@/components/chatbot/tailwind-indicator';

interface RootLayoutProps {
	children: React.ReactNode
}

const ChatLayout = ({ children }: RootLayoutProps) => {
	return (
		<div className='h-full'>
			<Toaster />
			<Providers attribute='class' defaultTheme='system' enableSystem>
				<div className='flex flex-col space-y-4'>
					{/* @ts-ignore */}
					 <Header />
					<main className='pt-[20px] space-y-4'>{children}</main>
				</div>
				<TailwindIndicator />
			</Providers>
		</div>
	);
};

export default ChatLayout;
