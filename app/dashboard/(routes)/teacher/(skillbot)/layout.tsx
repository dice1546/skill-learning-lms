"use client";

import dynamic from 'next/dynamic';

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
