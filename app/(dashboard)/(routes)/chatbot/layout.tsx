import ChatBotSidebar from "@/components/chat-bot-sidebar";


const ChatBotLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div>
      <div className="hidden md:flex h-full w-56 flex-col fixed z-50 bg-gray-100 overflow-y-auto">
        <ChatBotSidebar />
      </div>
      <main className="md:pl-56 pt-[20px] h-full">
        {children}
      </main>
    </div>
   );
}
 
export default ChatBotLayout;