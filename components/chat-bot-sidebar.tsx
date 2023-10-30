import NewChat from "./NewChat";

function ChatBotSidebar() {
  return (
    <div className="p-4 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                <NewChat/>
                <div>
                    {/* Model Selection */}
                </div>
                {/* Map through the chat rows */}
            </div>
        </div>
    </div>
  )
}

export default ChatBotSidebar;
