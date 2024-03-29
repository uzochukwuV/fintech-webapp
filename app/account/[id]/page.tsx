

import Overview from '@/components/account/overview';

import { getAccount, getUser } from '@/lib/helpers';




async function Page({ params }: { params: { id: string } }) {
  const {user} = await getUser(params.id!)
  const {account}= await getAccount(user._id)
  
  
  return (
    <>

       
        <div>
        <Overview user={user}  account={account} />
        </div>

    </>
  )
}

export default Page;

