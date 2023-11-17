import * as React from 'react'
import Link from 'next/link'
import { currentUser } from "@clerk/nextjs";
import {  useUser } from '@clerk/nextjs';
import { collection, orderBy, query } from "firebase/firestore";
import {useCollection} from "react-firebase-hooks/firestore";
import { cn } from '@/lib/utils'
import { clearChats } from '@/actions/chat-actions'; 
import { Button, buttonVariants } from '@/components/ui/button'
import { Sidebar } from './chat-bot-sidebar'
import { SidebarList } from './chat-sidebar-list' 
import {
  IconGitHub,
  IconNextChat,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import { SidebarFooter } from './sidebar-footer' 
import { database } from "@/firebase";
import { ThemeToggle } from './theme-toggle'
import { ClearHistory } from './clear-history' 
import { NextRequest } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
// import { LoginButton } from '@/components/login-button'

export function Header() {

  const { isLoaded, isSignedIn, user } = useUser();

  const [chats, loading, error] = useCollection(
    user && query(collection(database, "users", user?.primaryEmailAddress?.emailAddress!, "chats"), 
    orderBy("createdAt", "asc")
    )
  )
  
  
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        {user ? (
          <Sidebar>
            <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
              {/* @ts-ignore */}
              {chats?.docs.map(chat => (
                  <SidebarList key={chat.id} id={chat.id}/>
                ))}
            </React.Suspense>
            <SidebarFooter>
              <ThemeToggle />
              <ClearHistory clearChats={clearChats} />
            </SidebarFooter>
          </Sidebar>
        ) : (
          <Link href="/" target="_blank" rel="nofollow">
            <IconNextChat className="w-6 h-6 mr-2 dark:hidden" inverted />
            <IconNextChat className="hidden w-6 h-6 mr-2 dark:block" />
          </Link>
        )}
        {/* <div className="flex items-center">
          <IconSeparator className="w-6 h-6 text-muted-foreground/50" />
          {user ? (
            <div>
              <UserMenu user={user} />
            </div>
      
          ) : (
            <Button variant="link" asChild className="-ml-2">
              <Link href="/sign-in?callbackUrl=/">Login</Link>
            </Button>
          )}
        </div> */}
      </div>
    </header>
  )
}
