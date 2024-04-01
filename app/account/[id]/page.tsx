

import Overview from '@/components/account/overview';

import { getAccount, getUser } from '@/lib/helpers';




async function Page({ params }: { params: { id: string } }) {
  const {user} = await getUser(params.id!)
  const {account}= await getAccount(user._id)

  console.log(user.toJSON());
  console.log(account.toJSON());
  
  
  
  
  return (
    <>

       
        <div>
        <Overview user={user.toJSON()}  account={account.toJSON()} />
        </div>

    </>
  )
}

export default Page;

