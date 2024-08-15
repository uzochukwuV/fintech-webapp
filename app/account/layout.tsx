
import IsAuthenticated from "@/components/account/isAuthenticated";
import { cn } from "@/lib/utils";




export default async function Layout({
    children,
    params
  }: {
    children: React.ReactNode;
    params: {id: string}
  }){

    
    

    
    
    
    return (
       
         <div
      className={cn(
        " min-h-screen text-sm antialiased  text-white  flex flex-col  absolute top-0 right-0 left-0  "
       
      )}
    >
      
        {children}
        </div>
      
    )
  }