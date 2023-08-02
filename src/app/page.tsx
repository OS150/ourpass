"use client"
import Feed from "./feed/page";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession({
    required: true
  })

  if(status === "loading") {
    return <></>
  }

  return (
    <div> <Feed/> </div>
  );
}
