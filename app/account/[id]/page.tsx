
import Overview from '@/components/account/overview';
import { decrypt } from '@/lib/auth';
import { cookies } from 'next/headers';







async function Page({ params }: { params: { id: string } }) {

  const cookie = cookies().get("session")?.value;
  console.log(cookie);
  

  const user= await decrypt(cookie!);


  console.log(user.user);
  

  
  return (
    <>
       
      
        <Overview id={user.user._id} />
   
    </>
  )
}

export default Page;

