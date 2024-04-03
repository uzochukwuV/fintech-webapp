
"use client"
import { Context, Dispatch } from '@/app/state';
import Overview from '@/components/account/overview';
import { useContext, useEffect } from 'react';






async function Page({ params }: { params: { id: string } }) {
  const dispatch = useContext(Dispatch)
  const {user, account} = useContext(Context)
  
  useEffect(() => {
    let value;
    const response = fetch("/api/user/get", {
      method: "POST",
      body: JSON.stringify({id: params.id})
    }).then((res)=> res.json())
    response.then((val)=> dispatch({type: "update", payload: {...val}})
    )
    
  }, [params.id])
  
  
  
  
  return (
    <>

       
        <div>
        {
          user._id && <Overview />
        }
        </div>

    </>
  )
}

export default Page;

