export default function Layout({
  children,
  users,
  accounts,
}: {
  children: React.ReactNode;
  accounts: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <>
      <div className="grid grid-cols-12 ">
        <div className=" col-span-2">
            <h2 className=" text-3xl font-medium text-black">Naviagtion</h2>
        </div>
        <div className="col-span-10 ">
          <div className="">{children}</div>
          
        </div>
      </div>
    </>
  );
}
