import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '../components/Nav'
export default function Layout({children}) {
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
      <div className="bg-blue-900 w-screen h-screen flex"> 
      <Nav/>
      <div className=" flex flex-grow bg-white p-4 gap-2 mt-4 mr-4 mb-4 rounded-lg">
         {children}
         </div>

      </div>
      
    )
  }
 
}
