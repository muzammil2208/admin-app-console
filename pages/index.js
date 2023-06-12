import Layout from "@/components/Layout";
import {signOut, useSession} from "next-auth/react";
export default function Home()
{
  const { data: session } = useSession()
 
  return(
    <Layout>

        <div className="flex justify-between w-[100%]">
            <div><span>Hello  </span><span className="text-blue-900 font-bold">{session?.user.name}</span></div>
            <div className="flex gap-2 h-10 rounded-lg p-1 overflow-hidden">
              <img src={session?.user.image} className="w-8 h-8 rounded-xl"/>
              <span>{session?.user.name}</span>
              <button onClick={()=>signOut()} className="rounded-lg bg-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>
              </button>
            </div>
        </div>
    </Layout>
  )
}
  
