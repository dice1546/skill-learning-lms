"use client";

import dynamic from 'next/dynamic';
// import { Toaster } from 'react-hot-toast';
// import { Providers } from '@/components/provider';
// import { Header } from '@/components/chatbot/header';
// import { TailwindIndicator } from '@/components/chatbot/tailwind-indicator';

const Toaster = dynamic(() => 
 import('react-hot-toast').then(mod => mod.Toaster)
);

const Providers = dynamic(() => 
 import('@/components/provider').then(mod => mod.Providers)
);

const Header = dynamic(() => 
 import('@/components/chatbot/header').then(mod => mod.Header)
);

const TailwindIndicator = dynamic(() => 
 import('@/components/chatbot/tailwind-indicator').then(mod => mod.TailwindIndicator)
);

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
