import { BadgeAlert, Sun } from "lucide-react";

const ChatPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto px-2 text-black">
        <h1 className="text-5xl font-bold mb-20">SkillBot</h1>
        <div className="flex space-x-2 text-center">
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <Sun className="h-6 w-6"/>
                    <h2>Examples</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">&quot;Explain Something to me&quot;</p>
                    <p className="infoText">&quot;What is the difference between a dog and a cat?&quot;</p>
                    <p className="infoText">&quot;What is the color of the sun?&quot;</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <Sun className="h-6 w-6"/>
                    <h2>Capabilities</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">Supports multiple modals</p>
                    <p className="infoText">Your chats are stored and safe</p>
                    <p className="infoText">Notify what the bot is thinking</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <BadgeAlert className="h-6 w-6"/>
                    <h2>Limitations</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">May occasionally generate incorrect information</p>
                    <p className="infoText">May occasionally produce biased content or instructions</p>
                    <p className="infoText">Limited knowledgeof the world and events after 2021</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ChatPage;