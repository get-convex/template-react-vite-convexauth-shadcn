import { Chat } from "@/Chat/Chat";
import { ChatIntro } from "@/Chat/ChatIntro";
import { randomName } from "@/Chat/randomName";
import { Layout } from "@/Layout";
import { SignInForm } from "@/SignInForm";
import { UserMenu } from "@/components/UserMenu";
import { Authenticated, Unauthenticated } from "convex/react";
import { useState } from "react";

export default function App() {
  const [viewer] = useState(randomName());
  return (
    <Layout
      menu={
        <Authenticated>
          <UserMenu>{viewer}</UserMenu>
        </Authenticated>
      }
    >
      <>
        <Authenticated>
          <ChatIntro />
          <Chat viewer={viewer} />
        </Authenticated>
        <Unauthenticated>
          <SignInForm />
        </Unauthenticated>
      </>
    </Layout>
  );
}
