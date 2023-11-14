import { UseChatHelpers } from 'ai/react'
import * as React from 'react'
import Textarea from 'react-textarea-autosize'

import { Button, buttonVariants } from '@/components/ui/button'
import { IconArrowElbow, IconPlus } from '@/components/ui/icons'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
  
} from '@/components/ui/tooltip'
import { useEnterSubmit } from '@/hooks/use-enter-submit' 
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {database} from "@/firebase";

export interface PromptProps
  extends Pick<UseChatHelpers, 'input' | 'setInput'> {
  onSubmit: (value: string) => Promise<void>
  isLoading: boolean
  id: string,
}


export function PromptForm({
  onSubmit,
  input,
  setInput,
  isLoading,
  id,
}: PromptProps) {
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const router = useRouter()
  const { isLoaded, isSignedIn, user } = useUser();

  const createNewChat = async () => {
		const doc = await addDoc(
			collection(
				database,
				'users',
				user?.primaryEmailAddress?.emailAddress!,
				'chats'
			),
			{
				userId: user?.primaryEmailAddress?.emailAddress!,
				createdAt: serverTimestamp(),
			}
		);
	};
  const addDocMessage = async () => {
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: user?.primaryEmailAddress?.emailAddress!,
        name: user?.fullName!,
        avatar: user?.imageUrl || `https://ui-avatars.com/api/?name=${user?.fullName}`,
      },
    }
    const document = await addDoc(
      collection(
        database,
        "users",
        user?.primaryEmailAddress?.emailAddress!,
        "chats",
        id,
        "messages",
      ),
      message
    )
  }
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <form
      onSubmit={async e => {
        createNewChat(),
        addDocMessage(),
        e.preventDefault()
        if (!input?.trim()) {
          return
        }
        setInput('')
        await onSubmit(input)
      }}
      ref={formRef}
    >
      <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={e => {
                e.preventDefault()
                createNewChat()
                router.refresh()
                router.push('/dashboard/chat')
              }}
              className={cn(
                buttonVariants({ size: 'sm', variant: 'outline' }),
                'absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-4'
              )}
            >
              <IconPlus />
              <span className="sr-only">New Chat</span>
            </button>
          </TooltipTrigger>
          <TooltipContent>New Chat</TooltipContent>
        </Tooltip>
        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          rows={1}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Send a message."
          spellCheck={true}
          className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
        />
        <div className="absolute right-0 top-4 sm:right-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || input === ''}
              >
                <IconArrowElbow />
                <span className="sr-only">Send message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Send message</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </form>
  )
}
