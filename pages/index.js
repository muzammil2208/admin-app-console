import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '../components/Nav'
export default function Home() {
  const { data: session } = useSession()
  if(!session){
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
       <div className="text-center w-full">
         <button onClick={()=> signIn('google')} className="rounded-lg bg-white p-2 px-4 text-black">Login with google</button>
       </div>
      </div>
     )
  }
  else
  {
    return(
      <div className="bg-blue-900 w-screen h-screen "> 
        <Nav/>
      you are logged in as {session.user.email}
      <button onClick={()=>signOut()} className="rounded-lg bg-white p-2 px-4 text-black">sign out</button></div>
      
    )
  }
 
}
